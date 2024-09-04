const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  roomId: String,
  sender: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});



module.exports = mongoose.model('Chat', ChatSchema);
