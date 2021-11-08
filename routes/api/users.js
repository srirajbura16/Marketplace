const express = require('express');
const router = express.Router();

router.get('/user_Id', userController.get_user);

module.exports = router;
