const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    book_id: {
        type: Number,
        unique: true
    },
    book_name: {
        type: String,
        required: true
    },
    author_name: {
        type: String,
        required: true
    },
    book_price: {
        type: Number,
        required: true
    },
    book_quantity: {
        type: Number,
        required: true
    },
    cover_picture: {
        type: String, // Base64-encoded string
        required: true
    },
    book_description: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Books', BookSchema);