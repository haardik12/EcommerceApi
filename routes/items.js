// IMPORTING PACKAGE
const express = require('express')
const router = express.Router();

// IMPORTING CONTROLLER
const itemController = require('../controllers/item_controller');

// MAKING ROUTES
router.get('/', itemController.getItems);
router.post('/create', itemController.create);
router.post('/:id/quantify', itemController.update);
router.delete('/:id', itemController.delete);


// EXPORTING ROUTER
module.exports = router;