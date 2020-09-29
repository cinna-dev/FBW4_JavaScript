const express = require('express')
const dotenv = require('dotenv')
const moment = require('moment')
const logger = require('./middlerware/logger')
const exphbs = require('express-handlebars') //engine // simulates front-end
let members = require('./Members')

//initialize a variable called app as an instance object of express
const app = express();


//use your middleware function
//app.use(logger)

//Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: "main"
})) //using handlebars as the app engine // passing default layout
app.set('view engine', 'handlebars'); // engine // type

//Body Parser Middleware functions
app.use(express.json()) // to parse the request body " raw json:
app.use(express.urlencoded({
    extended: false
})) // when false you can not post nested objects
// Homepage Route
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Add Member',
        members
    }) /*members : members // if key === val just use the  the key*/
})


// Member API Routes  //use middleware
app.use('/api/members', require('./routes/api/members'))

dotenv.config()
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`app is listening to port at port ${PORT}`))