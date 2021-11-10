const express = require('express');
const router = express.Router();

const adsController = require('../../controllers/adsController');

router.get('/', adsController.get_ads);
router.post('/', adsController.create_ad);

router.get('/:id', adsController.get_ad);
// router.patch('/:id', adsController.update_ad);
// router.delete('/:id', adsController.delete_ad);

module.exports = router;
