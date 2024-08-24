const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
const config = require('../config/config');

const register = async ({ name, email, password, role }) => {
  const user = new User({ name, email, password, role });
  await user.save();

  return jwt.sign({ id: user._id, role: user.role }, config.jwtSecret, { expiresIn: '1h' });
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid email or password');
  }

  return jwt.sign({ id: user._id, role: user.role }, config.jwtSecret, { expiresIn: '1h' });
};

module.exports = { register, login };
