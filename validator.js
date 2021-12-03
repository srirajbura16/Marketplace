const { body } = require('express-validator');
const User = require('./models/User');

exports.signup_validation = [
  body('email').isEmail(),
  body('name').exists().trim().isLength({ min: 3 }, { max: 20 }),
  body('password').exists(),
  body('confirm-password').exists(),
];
//check username in db

exports.login_validation = [body('email').exists(), body('password').exists()];
