const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
require("dotenv").config();


// Secret key for JWT (you can keep this in .env file)
const JWT_SECRET = process.env.JWT_SECRET;
const MONGO_URI=process.env.MONGO_URI
const userSchema = mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, default: "user" } // user | admin
});

const UserModel = mongoose.model("user", userSchema);

// ✅ Register (with password hashing)
app.post("/adduser", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // check existing user
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ msg: "User already exists" });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 8);

        const data = await UserModel.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        res.send({ msg: "User registered successfully", user: data });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: "Error registering user" });
    }
});

// ✅ Login (with JWT)
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const isUser = await UserModel.findOne({ email });
        if (!isUser) {
            return res.status(400).send({ msg: "Register first!" });
        }

        const isPasswordValid = await bcrypt.compare(password, isUser.password);
        if (!isPasswordValid) {
            return res.status(400).send({ msg: "Wrong password" });
        }

        // generate token
        const token = jwt.sign(
            { userId: isUser._id, role: isUser.role },
            JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.send({ msg: "Login successful", token });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

// ✅ Middleware for authentication
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).send({ msg: "No token provided" });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // attach user data to req
        next();
    } catch (err) {
        return res.status(401).send({ msg: "Invalid token" });
    }
};

// ✅ Middleware for role-based access
const authorize = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).send({ msg: "Access denied" });
        }
        next();
    };
};

// ✅ Protected route (any logged in user)
app.get("/profile", authMiddleware, async (req, res) => {
    const user = await UserModel.findById(req.user.userId).select("-password");
    res.send(user);
});

// ✅ Admin-only route
app.get("/alluser", authMiddleware, authorize(["admin"]), async (req, res) => {
    try {
        const data = await UserModel.find().select("-password");
        res.send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Error fetching users" });
    }
});

const port = 8080;

app.listen(port, async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("App is listening on", port);
    } catch (err) {
        console.log(err);
    }
});
