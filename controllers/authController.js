const User = require('../models/User');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

// signup_validation,
exports.register = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.json({ errors: errors.array() });
    return;
  }

  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    if (err) {
      return next(err);
    }

    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
    });

    newUser.save().then((user) => {
      res.json(user);
    });
  });
};

exports.login = (req, res) => {
  //validate,
  //Extract errors,
  //Log in User

  const { username, password } = req.body;

  User.findOne({ username }).then((user) => {
    if (!user) {
      return res.status(404).json({ username: 'This user does not exist' });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          username: user.username,
          email: user.email,
        };
        const secretOrKey = process.env.JWT_SECRET;

        jwt.sign(
          payload,
          secretOrKey,
          // { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token,
            });
          }
        );
      } else {
        return res.status(400).json({ password: 'Incorrect password' });
      }
    });
  });
};
