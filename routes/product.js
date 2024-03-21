/* This code snippet is setting up a router using Express.js for handling different API endpoints
related to products. Here's a breakdown of what each part is doing: */
const express = require('express');
const upload = require('../libs/storage');
const { addProduct,getProducts,deleteProducts,editionProducts } = require('../controllers/productController')
const api = express.Router();

api.post('/products',upload.single('image'), addProduct);
api.get('/products',getProducts);
api.delete('/products/delete/:id', deleteProducts);
api.post('/products/edition/:id', upload.single('image'), editionProducts);

module.exports = api;