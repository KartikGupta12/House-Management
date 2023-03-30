const express = require('express');
const {createProduct} = require ('../Controller/productController');

const productRouter = express.Router();

productRouter
.route('/create')
.post(createProduct);

module.exports = productRouter;