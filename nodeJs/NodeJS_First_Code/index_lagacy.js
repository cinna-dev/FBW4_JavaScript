//console.log('Hello guys from fbw4')

//import {person} from './person';  // not supported in node.js

//const participant =  require('./person')

/* const User = require('./user') // the require() is commonJS script

const participant = new User('Clemens', 40)

participant.addAuthority('admin')
console.log(participant) */

//participant.introMe()



/* const Logger = require('./logger')

const dciLog = new Logger();


dciLog.on('wrong', data => {
    console.log('Call Listener', data)
})

dciLog.on('success', data => {
    console.log('Call Listener', data)
})

dciLog.log('fbw3_final_presentation', 'tech-error')
dciLog.log('fbw4_final_presentation', 'heroes') */


/* 
const Attendency = require('./attendency')

const dciattendence = new Attendency();


dciattendence.on('fail', data => {
    console.log('Call Listener', data)
})

dciattendence.on('success', data => {
    console.log('Call Listener', data)
})

dciattendence.log('fbw4_attendency', 'anwesend')
dciattendence.log('fbw4_attendency', 'not_anwesend') */






/////////  Server  /////////////
const http = require('http')
const path = require('path')
const fs = require('fs')


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {
                'Content-type': 'text/html'
            })
            res.end(content)
        })
    } else if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {
                'Content-type': 'text/html'
            })
            res.end(content)
        })
    } else if (req.url === '/api/users') {
        fs.readFile(path.join(__dirname, 'public', 'users.json'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {
                'Content-type': 'application/json'
            })
            res.end(content)
        })
    }
})

// go to the enviroment variable 
const PORT = process.env.PORT || 7000;
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT} `);
})