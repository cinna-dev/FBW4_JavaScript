const express = require('express')
const exphbs = require('express-handlebars')
const dotenv = require('dotenv')
let products = require('./Products')
let carts = require('./Carts')

const app = express()

app.engine('handlebars', exphbs({
    defaultLayout: "main"
}))
app.set('view engine', 'handlebars') //???

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.get('/', (req, res) => {
    //render in index.handlebars
    res.render('index', {
        title: 'products List',
        products
    })
})

app.get('/carts', (req, res) => {
    //render in index.handlebars
    res.render('carts', {
        title: 'Carts List',
        carts
    })
})

app.use('/api/carts', require('./routes/api/carts'))

dotenv.config()
const PORT = process.env.PORT
app.listen(PORT, () => console.log(PORT))