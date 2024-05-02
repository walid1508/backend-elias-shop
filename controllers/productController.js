const Product = require('../models/Product')
const slugify = require('slugify')


// @desc Get all Products
// @route GET /products
const getAllProducts = async (req, res) => {
    // Get all products from MongoDB
    const products = await Product.find().lean()

    // If no products
    if (!products?.length) {
        return res.status(400).json({ message: 'No products found' })
    }

    res.json(products)
}

// @desc Get single Product
// @route GET /products/:slug
const getSingleProduct = async (req, res) => {
    const { slug } = req.params

    // Get single product from MongoDB
    const product = await Product.findOne({
        slug
    }).lean()

    // If no product
    if (!product) {
        return res.status(400).json({ message: 'No product found' })
    }

    res.json(product)
}

// @desc Create new Product
// @route POST /products
const createNewProduct = async (req, res) => {
    const { name, price, description } = req.body;

    // Create slug from product name
    const slug = slugify(`${name}`, { lower: true })

    // Create new Product
    const product = await Product.create({ name, price, description, slug })

    if (!product) {
        return res.status(400).json({ message: 'Product creation failed' })
    }

    res.status(201).json(product)
}

// @desc Update Product
// @route PUT /products/:slug
const updateProduct = async (req, res) => {
    const { slug } = req.params
    const { name, price, description } = req.body

    // Find product by slug and update
    const product = await Product.findOneAndUpdate({ slug }, { name, price, description }, { new: true })

    // If no product
    if (!product) {
        return res.status(400).json({ message: 'No product found' })
    }

    res.json(product)
}

// @desc Delete Product
// @route DELETE /products/:slug
const deleteProduct = async (req, res) => {
    const { slug } = req.params

    // Find product by slug and delete
    const product = await Product.findOneAndDelete({ slug })

    // If no product
    if (!product) {
        return res.status(400).json({ message: 'No product found' })
    }

    res.json(product)
}


module.exports = {
    getAllProducts,
    createNewProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}


