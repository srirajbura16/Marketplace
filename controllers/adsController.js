const Ad = require('../models/Ad');

exports.get_ads = (req, res, next) => {
  Ad.find({}).exec((err, ads) => {
    if (err) {
      return next(err);
    }

    res.json(ads);
  });
};

exports.create_ad = [
  // Authenticate
  // validation,
  // Extract error,
  // Create Ad
  (req, res, next) => {
    const newAd = new Ad({
      title: req.body.title,
      description: req.body.description,
      condition: req.body.condition,
    });

    newAd.save().then((ad) => {
      res.json(ad);
    });
  },
];

exports.get_ad = (req, res, next) => {
  const id = req.params.id;
  Ad.findOne({ id }).exec((err, ad) => {
    if (err) {
      return next(err);
    }

    res.json(ad);
  });
};
