
const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/productController'); 

router.get('/', itemsController.getAllProducts);
router.post('/saveProduct', itemsController.saveProduct);


module.exports = router;