const express = require('express');
const { protect } = require('../middlewares/auth.middleware');
const { roleMiddleware } = require('../middlewares/role.middleware');
const { getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/user.controller');

const router = express.Router();

router.get('/', protect, roleMiddleware(['Admin']), getAllUsers);
router.get('/:id', protect, roleMiddleware(['Admin', 'Teacher', 'Student']), getUserById);
router.put('/:id', protect, roleMiddleware(['Admin']), updateUser);
router.delete('/:id', protect, roleMiddleware(['Admin']), deleteUser);

module.exports = router;
