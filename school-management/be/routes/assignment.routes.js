const express = require('express');
const { protect } = require('../middlewares/auth.middleware');
const { roleMiddleware } = require('../middlewares/role.middleware');
const { createAssignment, getAssignments, updateAssignmentStatus, deleteAssignment } = require('../controllers/assignment.controller');

const router = express.Router();

router.post('/', protect, roleMiddleware(['Admin', 'Teacher']), createAssignment);
router.get('/', protect, roleMiddleware(['Admin', 'Teacher', 'Student']), getAssignments);
router.put('/:id', protect, roleMiddleware(['Admin', 'Teacher']), updateAssignmentStatus);
router.delete('/:id', protect, roleMiddleware(['Admin']), deleteAssignment);

module.exports = router;
