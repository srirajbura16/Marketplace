const express = require('express');
const router = express.Router();

const userController = require('../../controllers/userController');

// router.get('/user_Id', userController.get_user);
router.post('/', userController.create_user);

module.exports = router;
