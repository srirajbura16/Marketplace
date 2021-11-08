const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('api working');
});

router.use('/ads', require('./ads'));
router.use('/users', require('./users'));

module.exports = router;
