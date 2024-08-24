const db = require('../helpers/db');
const Assignment = db.Assignment;

async function create(assignmentParam) {
  const assignment = new Assignment(assignmentParam);
  await assignment.save();
}

async function getAll() {
  return await Assignment.find();
}

async function getById(id) {
  return await Assignment.findById(id);
}

async function update(id, assignmentParam) {
  const assignment = await Assignment.findById(id);
  if (!assignment) throw 'Assignment not found';

  Object.assign(assignment, assignmentParam);
  await assignment.save();
}

async function _delete(id) {
  await Assignment.findByIdAndRemove(id);
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  delete: _delete
};
