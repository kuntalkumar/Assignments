const Assignment = require('../models/assignment.model');

const createAssignment = async (req, res) => {
  const assignment = new Assignment(req.body);
  await assignment.save();
  res.status(201).json(assignment);
};

const getAssignments = async (req, res) => {
  const assignments = await Assignment.find();
  res.json(assignments);
};

const updateAssignmentStatus = async (req, res) => {
  const assignment = await Assignment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(assignment);
};

const deleteAssignment = async (req, res) => {
  await Assignment.findByIdAndDelete(req.params.id);
  res.status(204).send();
};

module.exports = {
  createAssignment,
  getAssignments,
  updateAssignmentStatus,
  deleteAssignment,
};
