const http = require('http');

// Create server object 
http
    .createServer((req, res) => {
        //Write response 
        res.write('<h1>Hello Customer</h1>');
        res.end();
    })
    .listen(5000, () => {
        console.log('server is running ...')
    })

// localhost:5000
// to stop the server use CTRL + c
// clear terminal ctrl+ l 