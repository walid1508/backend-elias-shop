const express = require('express')
const router = express.Router()
const { getAllProducts, createNewProduct, getSingleProduct } = require('../controllers/productController')

router.route('/').get(getAllProducts).post(createNewProduct)
router.route('/:slug').get(getSingleProduct)


module.exports = router

