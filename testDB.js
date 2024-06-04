const mongoose = require('mongoose');
require('dotenv').config();

const BookSchema = new mongoose.Schema({
  book_id: {
    type: Number,
    unique: true,
  },
  book_name: {
    type: String,
    required: true,
  },
  author_name: {
    type: String,
    required: true,
  },
  book_price: {
    type: Number,
    required: true,
  },
  book_quantity: {
    type: Number,
    required: true,
  },
  cover_picture_small: {
    type: String,
    required: true,
  },
  cover_picture_large: {
    type: String,
    required: true,
  },
  book_description: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model('Books', BookSchema);

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    console.log(uri);
    if (!uri) {
      throw new Error('MONGO_URI is not defined');
    }
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');

    // Fetch all books
    const books = await Book.find();
    console.log('Books:', books);
    if (books.length === 0) {
      console.log('No books found in the collection.');
    } else {
      console.log(`Found ${books.length} books.`);
    }
  } catch (err) {
    console.error(`Database connection error: ${err.message}`);
  } finally {
    mongoose.connection.close();
  }
};

connectDB();
