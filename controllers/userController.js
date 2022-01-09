const User = require('../models/User');
const Ad = require('../models/Ad');
const async = require('async');

exports.get_user = (req, res, next) => {
  // const { user_id } = req.params;
  // async.parallel(
  //   {
  //     user: (callback) => {
  //       User.findById(user_id).exec(callback);
  //     },
  //     user_ads: (callback) => {
  //       Ad.find({ user: user_id }).exec(callback);
  //     },
  //   },
  //   function (err, results) {
  //     if (err) {
  //       return next(err);
  //     }
  //     const { user, user_ads } = results;
  //     res.json({ user, user_ads });
  //   }
  // );
  const { user_id } = req.params;
  User.findById(user_id)
    .populate('ads')
    .exec((err, user) => {
      if (err) {
        return next(err);
      }
      res.json(user);
    });
};
