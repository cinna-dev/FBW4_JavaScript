const express = require('express')
const dotenv = require('dotenv')
const moment = require('moment')
const logger = require('./middlerware/logger')


//initialize a variable called app as an instance object of express
const app = express();


//use your middleware function
//app.use(logger)


//Body Parser Middleware functions
app.use(express.json()) // to parse the request body " raw json:
app.use(express.urlencoded({ // when false you can not post nested objects
    extended: false
})) // to parse the request url : [option] : {extended : //false : allows only one post }
//keep false to send single object and true to send array , maps etc.. 
//advice allways keep false for better format

//Member API Roues






//Set a static folder : use method is for using a middleware

app.use(express.static('public'));

// Member API Routes  //use middleware
app.use('/api/members', require('./routes/api/members'))

dotenv.config()
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`app is listening to port at port ${PORT}`))