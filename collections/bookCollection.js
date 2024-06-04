const bookModel = require('../models/book');


const getAllBooks = async () => {
    try {
        const books = await bookModel.find({});
        return books;
    } catch(err){
        console.error(`Error fetching all books from Book Collection - ${err.message}`);
        throw new Error(`Error fetching all books from Book Collection - ${err}`);
    }
}

const getBookById = async (book_id) => {
    try {
        const book = await bookModel.findOne({
            book_id
        });
        return book;
    } catch(err){
        console.error(`Error fetching book with id ${book_id} - ${err.message}`);
        throw new Error(`Error fetching book with id ${book_id} - ${err}`);
    }
}

const addNewBook = async (bookData) => {
    try {
        const newBook = new bookModel(bookData);
        await newBook.save();
    } catch(err){
        console.error(`Error saving a new book - ${err.message}`);
        throw new Error(`Error saving a new book - ${err}`);
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    addNewBook
};