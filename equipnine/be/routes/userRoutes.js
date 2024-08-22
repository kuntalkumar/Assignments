const express = require('express');
const { createUser, getUserData, updateUser, deleteUser, loginUser } = require('../controllers/userController');
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/user/:userId', authenticateToken, getUserData);
router.put('/user/:userId', authenticateToken, updateUser);
router.delete('/user/:userId', authenticateToken, deleteUser);

module.exports = router;
