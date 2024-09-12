const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const port = 8080;
require('dotenv').config();

app.use(express.json());

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});


const UserModel = mongoose.model("user", userSchema);

app.get("/", (req, res) => {
    res.send("API is working");
});

app.get("/userDetails", async (req, res) => {
    try {
        const data = await UserModel.find();
        res.send(data);
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving user details', error });
    }
});

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const data = await UserModel.create({
            name,
            email,
            password: hashedPassword
        });
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send({ message: 'Error registering user', error });
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid) {
                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                res.send({ message: "Successfully logged in :)", token });
            } else {
                res.status(401).send("Wrong password :(");
            }
        } else {
            res.status(404).send("User not registered, kindly register first!");
        }
    } catch (error) {
        res.status(500).send("Internal server error");
    }
});

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

app.get("/profile", authenticateToken, async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.userId);
        if (!user) return res.status(404).send("User not found");
        res.send(user);
    } catch (error) {
        res.status(500).send("Error retrieving user profile");
    }
});






app.listen(port, async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to database");
    } catch (error) {
        console.log("Failed to connect to database");
    }
    console.log(`App is listening on port ${port}`);
});
