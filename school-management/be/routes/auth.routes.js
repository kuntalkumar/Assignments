const express = require('express');
const { register, login } = require('../services/auth.service');
const router = express.Router();

router.post('/register', async (req, res, next) => {
  try {
    const token = await register(req.body);
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const token = await login(req.body);
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
