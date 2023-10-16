// IMPORTING PACKAGE
const express = require('express')
const router = express.Router()

// IMPORTING CONTROLLER
const homeController = require('../controllers/home_controller');

// MAKING ROUTES
router.get('/', homeController.home);
router.use('/items', require('./items'))

// EXPORTING ROUTER
module.exports = router;
