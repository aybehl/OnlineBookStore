const express = require('express');
const router = express.Router();
const bookCollection = require('../collections/bookCollection');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

// SETUP Multer to store file in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//GET request to render the Admin Page with the add book form
router.get("/add-book", async (req, res) => {
    res.render('admin/add-book', {
        title: 'Add a New Book',
        message: req.query.message || null
    });
});

//POST request to add a new book to the Books Collection
router.post("/add-book", upload.single('cover_picture'), async (req, res) => {
    try {
        let bookData = {
            book_id: uuidv4(),
            book_name: req.body.book_name,
            author_name: req.body.author_name,
            book_price: req.body.book_price,
            book_quantity: req.body.book_quantity,
            book_description: req.body.book_description,
            cover_picture: req.file ? req.file.buffer.toString('base64') : null
        }
    
        await bookCollection.addNewBook(bookData);
        res.redirect('/admin/add-book?message=Book added successfully!');
        // res.render('admin/add-book', {
        //     title: 'Add a New Book',
        //     message: 'Book added successfully!' 
        // });
    } catch(err) {
        console.error(`Error occurred for API - POST /admin/add-book - ${err}`);
        return res.render('admin/add-book', {
            title: 'Add a New Book', 
            message: 'Error saving book data'
        });
    }
});

module.exports = router;