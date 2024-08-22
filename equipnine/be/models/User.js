const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobileNumber: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, immutable: true },
  createdBy: { type: String, default: 'system' },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: String, default: 'system' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
