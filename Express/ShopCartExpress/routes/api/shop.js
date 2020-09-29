const express = require('express')
const router = express.Router()
let products = require('../../Products')
let carts = require('../../Carts')

/* router.get('/', (req, res) => {

    res.json(products)

})

router.post('/', (req, res) => {
    const cart = {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author
    };
    if (!newBook.isbn || !newBook.title || !newBook.author) {
        return res.status(400).json({
            msg: 'please fill in all inputs'
        })
    }
    carts.push(cart)

    // res.redirect('/')
}); */

module.exports = router



/* const express = require('express')
const router = express.Router()
let products = require('../../Products')

router.get('/', (req, res) => {

    res.json(products)

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

module.exports = router */