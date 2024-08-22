const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/', userRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
