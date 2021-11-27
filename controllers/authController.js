const User = require('../models/User');

exports.register = [
  // validation,
  // Extract error,
  // Create Ad
  (req, res, next) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    newUser.save().then((user) => {
      res.json(user);
    });
  },
];

exports.login = [
  //validate,
  //Extract errors,
  //Log in User
];
