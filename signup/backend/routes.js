const express = require('express');

const router = express.Router();

const signUpController = require('./controller');

router.post('/signup',signUpController.postAddUser)

module.exports = router ;