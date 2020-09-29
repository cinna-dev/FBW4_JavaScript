const express = require('express')
const path = require('path')
const dotenv = require('dotenv')


//initialize a variable called app as an instance object of express
const app = express();

/* app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
}) */


//Set a static folder : use method is for using a middleware
//app.use(express.static(path.join(__dirname, 'public', 'index.html')))
app.use(express.static('public'));



dotenv.config()
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`app is listening to port at port ${PORT}`))