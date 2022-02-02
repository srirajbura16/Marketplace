const express = require('express');
const router = express.Router();
const apicache = require('apicache');
let cache = apicache.middleware;

const adsController = require('../../controllers/adsController');

router.get('/', cache('5 minutes'), adsController.get_ads);
router.post('/', adsController.create_ad);

router.get('/:id', cache('5 minutes'), adsController.get_ad);

//check auth
// router.patch('/:id', adsController.update_ad);
// router.delete('/:id', adsController.delete_ad);

module.exports = router;
