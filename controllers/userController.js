const User = require('../models/User');

exports.get_user = (req, res, next) => {
  //getuser
  //all posts by user (async.parallel)

  const { user_id } = req.params;
  User.findById(user_id).exec((err, user) => {
    if (err) {
      return next(err);
    }

    res.json(user);
  });
};
