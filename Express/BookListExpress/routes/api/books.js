const express = require('express')
const router = express.Router()
let books = require('../../Books')

router.get('/', (req, res) => {
    console.log('dsafasdf')
    res.json(books)

})

router.post('/', (req, res) => {
    const newBook = {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author
    };
    if (!newBook.isbn || !newBook.title || !newBook.author) {
        return res.status(400).json({
            msg: 'please fill in all inputs'
        })
    }
    books.push(newBook)

    res.redirect('/')
});

router.delete('/:id', (req, res) => {

    const found = books.some(book => (
        parseInt(book.isbn) === parseInt(req.params.id)))

    if (found) {

        books = books.filter(book => (
            parseInt(book.isbn) !== parseInt(req.params.id)))
        // res.json(books)
        res.redirect('/')
    } else {
        res.status(400).json({
            msg: `Book with isbn ${req.params.id} not found`
        })
    }

})

module.exports = router