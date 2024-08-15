const express = require("express");
const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { jsonToken } = require("../config/config");

const route = express.Router();

route.post("/register", async (req, res) => {
    const { name, email, password, phoneNo } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword, phoneNo });
        await newUser.save();
        res.status(201).json({ message: "User Registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

route.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, jsonToken, { expiresIn: '1h' });
        res.json({ token });

    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = route;
