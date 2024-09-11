const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(express.json());
const mongoDbUrl = process.env.MONGODB_URL;

const corsOptions = {
    origin:"*"
};
app.use(cors(corsOptions));

// MongoDB connection
mongoose.connect(mongoDbUrl)
    .then(() => console.log("Connected to db successfully"))
    .catch(() => console.log("Failed to connect to db"));

// Updated Task schema and model
const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    status: {
        type: String,
    }
});
const TaskModel = mongoose.model("task", taskSchema);

app.post("/addtask", async (req, res) => {
    const { task, status } = req.body;

    try {
        const newTask = await TaskModel.create({ task, status });
        res.status(201).json({ message: "Task created successfully", newTask });
    } catch (err) {
        res.status(500).json({ message: "Server error while creating the task", error: err });
    }
});

app.put("/edit/:id", async (req, res) => {
    const { task, status } = req.body;
    const taskId = req.params.id;

    try {
        const updatedTask = await TaskModel.findByIdAndUpdate(
            taskId,
            { task, status },
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

app.get("/task", async (req, res) => {
    try {
        const tasks = await TaskModel.find();
        res.send(tasks);
    } catch (err) {
        res.status(500).json({ message: "Server error while fetching tasks", error: err });
    }
});

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
