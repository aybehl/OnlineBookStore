# Book World Store

## Overview

Book World Store is an online bookstore application that allows users to view and manage a collection of books. This application provides different routes to view all books, view details of a specific book, and an admin interface to add new books to the collection.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

## Routes

### Home Page
GET /
Renders the home page of the Book World Store.

### Books
GET /books
Fetches and renders a list of all books in the Books Collection.

GET /books/
Fetches and renders the details of a specific book by its ID.

### Admin
GET /admin/add-book
Renders the admin page with the add book form.

POST /admin/add-book
Adds a new book to the Books Collection. Uses Multer for file uploads and UUID for generating unique book IDs.

## DATABASE COLLECTIONS
Books
- Id
- name
- author_name
- price
- quantity
- cover_picture
- description

# Image Citations
- All images for the book covers have been taken from this website - https://bookoutlet.ca/
- All icons are taken from - svgrepo.com
