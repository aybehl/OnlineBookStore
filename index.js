const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const path = require('path');
const connectDB = require('./config/database');
const indexRoutes = require('./routes/index');
const bookRoutes = require('./routes/books');
const adminRoutes = require('./routes/admin');



// CONNECT TO MONGO DB
connectDB();

//SET UP THE EXPRESS APP
const app = express();
const PORT = process.env.PORT || "8888";

//SET UP FOLDER FOR STATIC FILES
app.use(express.static(path.join(__dirname, "public")));

//SET UP APPLICATION TEMPLATE ENGINE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middleware - convert query string formats in form data to JSON format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//SET UP ROUTES
app.use('/', indexRoutes);
app.use('/books', bookRoutes);
app.use('/admin', adminRoutes);

//SETUP SERVER LISTENING
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});