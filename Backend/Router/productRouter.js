const express = require('express');
const {createProduct,getProduct,updateProduct} = require ('../Controller/productController');
const {protectRoute} = require('../Controller/authController');

const productRouter = express.Router();

// productRouter.route('/')
// .get(getProduct)
// .post(createProduct)
// .patch(updateProduct);

module.exports = productRouter;