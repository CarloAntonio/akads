// libraries
const express = require('express');
// const { body } = require('express-validator');

// controllers
const userController = require('../controllers/user');

// create router
const router = express.Router();

// routes
router.post('/getUser', userController.getUserData);
router.post('/updateUser', userController.updateUserData);
router.post('/uploadProfilePic', userController.uploadProfilePic);

// export router
module.exports = router;