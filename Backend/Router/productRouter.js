const express = require('express');
const {createProduct,getInventory,updateProduct,graphData} = require ('../Controller/productController');
const {protectRoute} = require('../Controller/authController');

const productRouter = express.Router();
productRouter.use(protectRoute);

productRouter.route('/')
.get(getInventory)
.post(createProduct)
.patch(updateProduct);

productRouter.route('/graph')
.get(graphData);

module.exports = productRouter;