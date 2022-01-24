const User = require('../models/User');
const Ad = require('../models/Ad');

exports.get_user = (req, res, next) => {
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
