const express = require("express");
const Post = require("../models/Post");
const authenticateToken = require("../middlewares/authMiddleware");

const route = express.Router();

route.post("/newpost", authenticateToken, async (req, res) => {
    const { title, image, description, author } = req.body;
    try {
        const newPost = new Post({ title,  description, author });
        await newPost.save();
        res.status(201).json({ message: "Successfully created the post", post: newPost });
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ message: "Server error" });
    }
});

route.get("/posts", async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = route;
