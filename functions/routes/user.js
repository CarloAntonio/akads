// libraries
const express = require('express');
// const { body } = require('express-validator');

// controllers
const userController = require('../controllers/user');

// create router
const router = express.Router();

// routes
router.post('/getUser', userController.getUserData)

// export router
module.exports = router;