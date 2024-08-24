// const { register, login } = require('../services/auth.service');

// exports.registerUser = async (req, res, next) => {
//     try {
//         const token = await register(req.body.name, req.body.email, req.body.password, req.body.role);
//         res.status(201).json({ token });
//     } catch (error) {
//         next(error);
//     }
// };

// exports.loginUser = async (req, res, next) => {
//     try {
//         const token = await login(req.body.email, req.body.password);
//         res.status(200).json({ token });
//     } catch (error) {
//         next(error);
//     }
// };
