require('dotenv').config();

module.exports = {
    mongoURI: process.env.MONGO_URI,
    jsonToken: process.env.JSON_TOKEN,
};
