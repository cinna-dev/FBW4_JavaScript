const express = require('express')
const router = express.Router()
let carts = require('../../Carts')
let products = require('../../Products')

router.get('/', (req, res) => {
    res.json(carts)
})

router.post('/', (req, res) => {
    const found = products.some(product => product.id === req.body.id)
    if (found) {
        const cart = products.filter(product => product.id === req.body.id)
        carts.push(...cart)
    } else {
        return res.status(400).json({
            msg: 'no product with the id: ' + req.body.id + 'found'
        })
    }

});



router.delete('/:id', (req, res) => {
    const found = carts.some(cart => (
        parseInt(cart.id) === parseInt(req.params.id)))
    if (found) {
        for (i = 0; i < carts.length; i++) {
            if (parseInt(carts[i].id) === parseInt(req.params.id)) {
                carts.splice(i, 1)
                break;
            }
        }

        //res.json(carts)
        res.status(204)
        //res.redirect('/')
    } else {
        res.status(400).json({
            msg: `Book with isbn ${req.params.id} not found`
        })
    }
})

module.exports = router