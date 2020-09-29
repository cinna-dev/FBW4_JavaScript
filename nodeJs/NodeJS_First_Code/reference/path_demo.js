// execute by console with "node 'filename'"
const path = require('path') // core module "path"
// it's core module already included with Node.js

//console.log(path); //clg for console.log()


//get the base file name (basename)
//console.log(path.basename(__filename));


//get the Directory name (path.dirname)  //Directory == address
//console.log(path.dirname(__filename))
// returns : c:\Users\safwan\Desctop\NodeJS_First_Code\reference
//console.log(__dirname)
//console.log(path.dirname('index.js'))// we check it later


//get the file extention
//console.log(path.extname(__filename))


//Create path Object
//console.log(path.parse(__filename));
//console.log(path.parse(__filename).name);


//concatinate paths : join a file into a current path
//the result we want : path/test/hello.html

console.log(path.join(__dirname, 'test', 'hello.html'));