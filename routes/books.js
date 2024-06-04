const express = require('express');
const router = express.Router();
const bookCollection = require('../collections/bookCollection');

//GET request to get all books from Books Collection
router.get("/", async (req, res) => {
    try {
        const books = await bookCollection.getAllBooks();
        console.log(books);
        res.render('view_all_books', {
            title: "Book World Store",
            books
        });
    } catch(err){
        console.error(`Error occurred for API - GET /books - ${err}`);
        res.status(500).send({
            api: '/books',
            status: 500,
            errorMessage: err.message
        });
    }
});

//GET request to get a specific book from Books Collection
router.get("/:book_id", async (req, res) => {
    try {
        //Validate book_id
        const book_id = parseInt(req.params.book_id, 10);
        if(isNaN(book_id)){
            return res.status(400).send({
                api: '/books/:book_id',
                status: 400,
                errorMessage: 'Invalid book_id, It must be an integer',
            });
        }

        const book = await bookCollection.getBookById(book_id);
        if(!book){
            return res.status(404).send({
                api: '/books/:book_id',
                status: 404,
                errorMessage: 'Book not found',
            });
        }
        res.render('view_book', {
            title: "Book World Store",
            book
        });
    } catch(err){
        console.error(`Error occurred for API - GET /books/:book_id - ${err}`);
        res.status(500).send({
            api: '/books/:book_id',
            status: 500,
            errorMessage: err.message
        });
    }
});

module.exports = router;