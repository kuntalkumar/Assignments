const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(express.json());
const mongoDbUrl = process.env.MONGODB_URL;

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend URL or use '*' for allowing all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Define the allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Define the allowed headers
};
app.use(cors(corsOptions));

// MongoDB connection
mongoose.connect(mongoDbUrl)
    .then(() => console.log("Connected to db successfully"))
    .catch(() => console.log("Failed to connect to db"));

// User schema and model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        length: 10
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
});
const UserModel = mongoose.model("user", userSchema);

// Task schema and model
const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'progress', 'completed'],
        default: 'pending'
    },
    priority: {
        type: String
    }
});
const TaskModel = mongoose.model("task", taskSchema);

// User signup
app.post("/signup", async (req, res) => {
    const { name, phone, email, password } = req.body;
    const isUser = await UserModel.findOne({ email });
    if (isUser) {
        return res.status(400).json({ message: "Already Registered" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = { name, phone, email, password: hashPassword };
    const newUserdata = await UserModel.create(newUser);
    res.status(200).json({ message: newUserdata });
});

// User login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const isUser = await UserModel.findOne({ email });
    if (!isUser) {
        return res.status(400).json({ message: "Not found any user, kindly Signup" });
    }
    const checkPassword = await bcrypt.compare(password, isUser.password);
    if (!checkPassword) {
        return res.status(404).json({ message: "Wrong password" });
    }
    const token = jwt.sign({ id: isUser._id, email: isUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: "Logged in successfully", token });
});

// Create a new task
app.post("/addtask", async (req, res) => {
    const { task, status, priority } = req.body;

    try {
        const newTask = await TaskModel.create({ task, status, priority });
        res.status(201).json({ message: "Task created successfully", newTask });
    } catch (err) {
        res.status(500).json({ message: "Server error while creating the task", error: err });
    }
});

// Update an existing task
app.put("/edit/:id", async (req, res) => {
    const { task, status, priority } = req.body;
    const taskId = req.params.id;

    try {
        const updatedTask = await TaskModel.findByIdAndUpdate(
            taskId,
            { task, status, priority },
            { new: true, runValidators: true }
        );
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task updated successfully", updatedTask });
    } catch (err) {
        res.status(500).json({ message: "Server error while updating the task", error: err });
    }
});

// Get all tasks
app.get("/task", async (req, res) => {
    try {
        const tasks = await TaskModel.find();
        // res.status(200).json({ tasks });
        res.send(tasks)
    } catch (err) {
        res.status(500).json({ message: "Server error while fetching tasks", error: err });
    }
});

// Delete a task
app.delete("/delete/:id", async (req, res) => {
    try {
        const taskId = req.params.id;
        const deletedTask = await TaskModel.findByIdAndDelete(taskId);
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted successfully", deletedTask });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

const port = 8080;
app.listen(port, () => {
    console.log("App listening on port", port);
});
