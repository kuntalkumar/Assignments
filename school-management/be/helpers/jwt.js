const expressJwt = require('express-jwt');
const config = require('../config/config');
const db = require('./db');

function jwt(roles = []) {
  return [
    expressJwt({ secret: config.jwtSecret, algorithms: ['HS256'] }),
    async (req, res, next) => {
      const user = await db.User.findById(req.user.sub);
      if (!user || (roles.length && !roles.includes(user.role))) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      req.user.role = user.role;
      next();
    }
  ];
}

module.exports = jwt;
