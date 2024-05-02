const express = require('express')
const router = express.Router()
const { getAllProducts, getSingleProduct, createNewProduct, updateProduct, deleteProduct } = require('../controllers/productController')

router.route('/')
    .get(getAllProducts)
    .post(createNewProduct)

router.route('/:slug')
    .get(getSingleProduct)
    .put(updateProduct)
    .delete(deleteProduct)

module.exports = router

