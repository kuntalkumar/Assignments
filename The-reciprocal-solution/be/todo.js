const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const port = 8000;
require('dotenv').config();

app.use(express.json());

const todoSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});


const TodoModel = mongoose.model("user", todoSchema);

app.get("/", (req, res) => {
    res.send("API is working");
});

app.get("/getTodo", async (req, res) => {
    try {
        const data = await TodoModel.find();
        res.send(data);
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving Todo details', error });
    }
});

app.post("/addTodo", async (req, res) => {
    const { name,work } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const data = await TodoModel.create({
            name,
            work
        });
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send({ message: 'Error adding todo', error });
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
        const user = await TodoModel.findById(req.user.userId);
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
