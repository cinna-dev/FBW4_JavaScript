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


//Get all Members
app.get('/api/members', (req, res) => {
    res.json(members)
})

//Get single Members
app.get('/api/members/:id', (req, res) => { // what comes after members will be id
    //res.send(req.params.id)
    //res.json(members.filter(member => member.id === parseInt(req.params.id)))

    // Array.some(function(){condition}):boolean -- returns true if one atleast follow condition
    const found = members.some(member => (member.id === parseInt(req.params.id)))
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({
            msg: `Member with id ${req.params.id} not found`
        })
    }
})


//Set a static folder : use method is for using a middleware

app.use(express.static('public'));


dotenv.config()
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`app is listening to port at port ${PORT}`))