const express = require('express');
const { registerUser, loginUser,getUserData } = require('../controllers/userController');
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', authenticateToken, getUserData); // Add this line

module.exports = router;
