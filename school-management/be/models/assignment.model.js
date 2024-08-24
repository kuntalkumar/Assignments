const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Completed', 'Rework'], default: 'Pending' },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Assignment', AssignmentSchema);
