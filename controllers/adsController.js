const Ad = require('../models/Ad');
const apicache = require('apicache');
let cache = apicache.middleware;

exports.get_ads = (req, res, next) => {
  Ad.find({}).exec((err, ads) => {
    if (err) {
      return next(err);
    }
    req.apicacheGroup = req.params.ads;
    res.status(200).json(ads);
  });
};

exports.create_ad = [
  // Authenticate
  // validation,
  // Extract error,
  // Create Ad
  (req, res, next) => {
    const { title, description, price, condition, image_url, user } = req.body;
    const newAd = new Ad({
      title,
      description,
      price,
      condition,
      image_url,
      user,
    });

    newAd
      .save()
      .then((ad) => {
        res.json(ad);
      })
      .catch((err) => console.log(err));

    apicache.clear(req.params.ads);
  },
];

exports.get_ad = (req, res, next) => {
  const id = req.params.id;

  Ad.findById(id)
    .populate('user', '-password')
    .exec((err, ad) => {
      if (err) {
        next(err);
      }

      res.json(ad);
    });
};
