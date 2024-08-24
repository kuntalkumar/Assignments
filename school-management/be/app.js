const express = require('express');
const db = require('./helpers/db');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const assignmentRoutes = require('./routes/assignment.routes');
const errorHandler = require('./helpers/errorHandlers');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/assignments', assignmentRoutes);

app.use(errorHandler);

module.exports = app;
