const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('api working');
});

router.use('/ads', require('./ads'));
router.use('/auth', require('./auth'));
router.use('/users', require('./users'));

module.exports = router;
