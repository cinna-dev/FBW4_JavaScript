/////////  Server  /////////////
const http = require('http')
const path = require('path')
const fs = require('fs') // file send
const dotenv = require('dotenv')
const express = require('express')
const morgan = require('morgan')

const app = express()


app.use(morgan('dev'))

/* app.use(function (req, res, next) {
    console.log(`reqPath ${req.path}`);
    if (req.path.indexOf('.') === -1) {
        let file = __dirname + '/public' + req.path + '.html';
        console.log(`file ${file}`);
        fs.exists(file, function (exists) {
            console.log(exists);
            if (exists)
                req.url += '.html';
            next();
        })
    } else {
        next()
    }
}) */

app.use(function (req, res, next) {
    if (req.path.indexOf('.') === -1) {
        if (req.url !== '/') req.url += '.html';
        next();
    } else {
        next()
    }
})

app.use(express.static('public'))

dotenv.config()

app.listen(process.env.PORT)