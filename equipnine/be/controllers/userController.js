const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
const createUser = async (req, res) => {
  const { firstName, lastName, mobileNumber, password, profilePicture } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ mobileNumber });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      mobileNumber,
      password: hashedPassword,
      profilePicture,
    });

    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

// Login a user
const loginUser = async (req, res) => {
  const { mobileNumber, password } = req.body;

  try {
    // Find the user by mobile number
    const user = await User.findOne({ mobileNumber });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id, mobileNumber: user.mobileNumber }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token, userId: user._id, userName: `${user.firstName} ${user.lastName}` });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

// Get user data
const getUserData = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user data', error });
  }
};

// Update user data
const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { firstName, lastName, mobileNumber, profilePicture } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.mobileNumber = mobileNumber || user.mobileNumber;
    user.profilePicture = profilePicture || user.profilePicture;
    user.updatedAt = Date.now();

    await user.save();

    res.json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};

module.exports = {
  createUser,
  loginUser,
  getUserData,
  updateUser,
  deleteUser,
};
