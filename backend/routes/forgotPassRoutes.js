const express = require('express');

const userAuth= require('../middleware/auth')

const router = express.Router();

const forgotPassController = require('../controllers/forgotPassController');

router.post('/forgotpassword',forgotPassController.forgotPassword)



module.exports = router ;