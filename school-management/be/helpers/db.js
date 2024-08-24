const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected successfully!');
}).catch((err) => {
  console.error('MongoDB connection error:', err.message);
  process.exit(1);
});

mongoose.Promise = global.Promise;
