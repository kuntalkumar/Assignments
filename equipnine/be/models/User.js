const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobileNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String, default: 'system' },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: String, default: 'system' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
