const express = require('express');
const {createProduct,getInventory,updateProduct} = require ('../Controller/productController');
const {protectRoute} = require('../Controller/authController');

const productRouter = express.Router();

productRouter.use(protectRoute);

productRouter.route('/')
.get(getInventory)
.post(createProduct);


module.exports = productRouter;

// .patch(updateProduct);