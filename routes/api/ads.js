const express = require('express');
const router = express.Router();

const adsController = require('../../controllers/adsController');

router.get('/', adsController.get_ads);
router.post('/', adsController.create_ad);

router.get('/ad_Id', adsController.get_ad);
router.patch('/ad_Id', adsController.update_ad);
router.delete('/ad_Id', adsController.delete_ad);

module.exports = router;
