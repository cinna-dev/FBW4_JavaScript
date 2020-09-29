const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const members = require('./Members')
const moment = require('moment')
const logger = require('./middlerware/logger')


//initialize a variable called app as an instance object of express
const app = express();


//use your middleware function
//app.use(logger)






//Set a static folder : use method is for using a middleware

app.use(express.static('public'));

// Member API Routes  //use middleware
app.use('/api/members', require('./routes/api/members'))

dotenv.config()
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`app is listening to port at port ${PORT}`))