const express = require('express')
const exphbs = require('express-handlebars')
const dotenv = require('dotenv')
let books = require('./Books')

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
        title: 'Add Book',
        books
    })
})

app.use('/api/books', require('./routes/api/books'))

dotenv.config()
const PORT = process.env.PORT
app.listen(PORT, () => console.log(PORT))