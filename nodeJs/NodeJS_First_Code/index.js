/////////  Server  /////////////
const http = require('http')
const path = require('path')
const fs = require('fs') // file send
const dotenv = require('dotenv')


const server = http.createServer((req, res) => {
    // Build file path : make the file path dynamic
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

    //Extention of the file
    let extName = path.extname(filePath)

    //console.log(filePath, extName)
    // Initiate default content-type 
    let contentType = 'text/html';

    //Check ext and set content type
    // also checks for links href src etc inside the .html and load it
    switch (extName) {
        case '.css':
            contentType = 'text/css'
            break;

        case '.png':
            contentType = 'image/png'
            break;

        case '.js':
            contentType = 'text/javascript'
            break;

        case '.json':
            contentType = 'application/json'
            break;
    }

    //Check if the contentType is text/html and the extName is "", and .html
    if (contentType == 'text/html' && extName == '') filePath += '.html'

    //log the filePath
    console.log(filePath);

    //Read File
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                //ENOENT means page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    if (err) throw err;
                    res.writeHead(404, {
                        'Content-Type': 'text/html'
                    })
                    res.end(content, 'utf8')
                })
            } else {
                //Some server Error
                res.writeHead(500) //Client did everthing correct but server has an error // page searched exists

                res.end(`Server Error : ${err.code}`)
            }
        } else {
            res.writeHead(200, {
                'Content-Type': contentType
            })
            res.end(content, 'utf8')
        }
    })
});

// favicon.ico icon of tab
// npm install dotenv
dotenv.config() // needs dotenv.config to be able to read the .env file
console.log(process.env.PORT)
// go to the enviroment variable 
const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT} `);
})