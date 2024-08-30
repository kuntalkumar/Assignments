const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const User = require('./models/Users'); 
const Chat = require('./models/Chat'); 
require('dotenv').config();

const mongoDBUrl = process.env.MONGODB_URL;
const jwtSecret = process.env.JSONWEB_TOKEN;

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection

// JWT Authentication Middleware
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, jwtSecret); // Use a strong secret key
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};

// User Routes
app.post('/register', async (req, res) => {
  const { name, email, password, phoneNo, profession } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, phoneNo, profession });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' }); // Use a strong secret key
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Protected route to get user list (Example usage of authMiddleware)
app.get('/users', authMiddleware, async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Exclude password from the result
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Chat functionality with Socket.io
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  }
});

// Middleware for socket authentication
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) {
    return next(new Error('Authentication error'));
  }
  jwt.verify(token, '12456', (err, decoded) => { // Use the same secret key
    if (err) {
      return next(new Error('Authentication error'));
    }
    socket.userId = decoded.id;
    next();
  });
});

io.on('connection', (socket) => {
  console.log('New user connected:', socket.userId);

  // Join room (private chat)
  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
    console.log(`${socket.userId} joined room: ${roomId}`);
  });

  // Handle sending a message
  socket.on('sendMessage', async ({ roomId, message }) => {
    const chatMessage = new Chat({ roomId, sender: socket.userId, message });
    await chatMessage.save(); // Save message to MongoDB
    io.to(roomId).emit('message', { sender: socket.userId, message, timestamp: chatMessage.timestamp });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.userId);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);
  mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Connected to DB")
  }).catch((err)=>{
    console.log("Failed to connect to db ", err)
  })

});
