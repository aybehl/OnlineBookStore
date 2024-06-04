const express = require('express');
const router = express.Router();

//GET request to render the HomePage
router.get("/", (req, res) => {
    res.render('homepage', {
        title: "Book World Store"
    });
});

module.exports = router;