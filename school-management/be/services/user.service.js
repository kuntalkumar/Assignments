// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const config = require("../config");
// const db = require("../helpers/db");

// async function authenticate({ email, password }) {
//   const user = await db.User.findOne({ email });
//   if (user && bcrypt.compareSync(password, user.password)) {
//     const { _id, firstName, lastName, role } = user;
//     const token = jwt.sign({ sub: _id, role }, config.secret);
//     return { _id, firstName, lastName, role, token };
//   }
// }

// async function create(userParam) {
//   if (await db.User.findOne({ email: userParam.email })) {
//     throw 'Email "' + userParam.email + '" is already taken';
//   }

//   const user = new db.User(userParam);
//   user.password = bcrypt.hashSync(userParam.password, 10);
//   await user.save();
// }

// async function getAll() {
//   return await db.User.find();
// }

// async function getById(id) {
//   return await db.User.findById(id);
// }

// async function update(id, userParam) {
//   const user = await db.User.findById(id);
//   if (!user) throw 'User not found';

//   if (user.email !== userParam.email && await db.User.findOne({ email: userParam.email })) {
//     throw 'Email "' + userParam.email + '" is already taken';
//   }

//   if (userParam.password) {
//     userParam.password = bcrypt.hashSync(userParam.password, 10);
//   }

//   Object.assign(user, userParam);
//   await user.save();
// }

// async function _delete(id) {
//   await db.User.findByIdAndRemove(id);
// }

// module.exports = {
//   authenticate,
//   create,
//   getAll,
//   getById,
//   update,
//   delete: _delete,
// };
