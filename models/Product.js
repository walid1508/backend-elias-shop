const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    slug: {
        type: String,
        required: false,
        unique: true
    },
    price: {
        type: Number,
        required: [true, 'Please add a price'],
        maxlength: [5, 'Price can not be more than 5 characters']
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Description can not be more than 500 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


productSchema.plugin(AutoIncrement, {inc_field: 'product_id'});

module.exports = mongoose.model('Product', productSchema);

