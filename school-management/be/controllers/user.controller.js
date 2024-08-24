const User = require('../models/user.model');

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
};

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).send();
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
