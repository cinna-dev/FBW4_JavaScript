const fs = require('fs') //file system

const path = require('path')

//Create folder

/*  fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
    if (err) throw err;
    console.log('folder created ...');
}) */ // needs to be commented out when test folder is allready created

//fs.mkdirSync for a syncronise


//Create File and write to it
/* fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello FbW4 Heroes', err => {
    if (err) throw err;
    console.log('File written ..')
}) */



//Create a file ,write and append to it
/* fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello FbW4 Heroes ', err => {
    if (err) throw err;
    console.log('File written ..')

    //File Append
    fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), 'I love Node.js', err => {
        if (err) throw err;
        console.log('text appended')
    })
}) */


//Read File
/* fs.readFile(path.join(__dirname, '/test', 'hello_World.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
}) */


//Rename File
/* fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello_World.txt'), err => {
    if (err) throw err;
    console.log('File Renamed ...');
}) */






/* -------------------------- Exercise -------------------------------- */

/* fs.mkdir(path.join(__dirname, 'users'), {}, (err) => {
    if (err) throw err;
    console.log('folder created ...');
})

fs.writeFile(path.join(__dirname, 'users', 'Users.txt'), 'Omer ', err => {
    if (err) throw err;
    console.log('File written ..')

    fs.appendFile(path.join(__dirname, 'users', 'Users.txt'), ' Sascha', err => {
        if (err) throw err;
        console.log('text appended')
    })

    fs.appendFile(path.join(__dirname, 'users', 'Users.txt'), ' Stefan', err => {
        if (err) throw err;
        console.log('text appended')
    })
})

fs.readFile(path.join(__dirname, '/users', 'Users.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
})

 */

/* const users = [{
    name: "Eng. Omer"
}, {
    name: "Teacher. Stefan"
}, {
    name: "Prof. Sascha"
}]
//Create Folder
fs.mkdir(path.join(__dirname, '/data'), {}, err => {
    if (err) throw err;
    console.log('Folder created ...');

    //create a lifle and write // inside the mkdir
    fs.writeFile(path.join(__dirname, '/data', 'users.json'), JSON.stringify(users), err => {
        if (err) throw err;
        console.log('File created and data written ...')

        //reaad File // doesnt matter wich callback it is
        fs.readFile(path.join(__dirname, '/data', 'users.json'), 'utf8', (err, data) => {
            if (err) throw err;
            // display user name
            JSON.parse(data).forEach(user => {
                console.log(user.name)
            })

            // alert the successfull message
            console.log('Users name displayed')

        })
    })
}) */


/* ------------------------------------------- */

//remove a folder
//NOTE : you moust create a folder named : "myFolderToDelete". 
//NOTE : "myFolderToDelete" must be an empty folder.
/* fs.rmdir(path.join(__dirname, "testfolder"), err => {
    if (err) throw err
    console.log('Folder deleted');
}) */


// read the content of a folder
/* fs.readdir(__dirname, (err, files) => {
    if (err) throw err;
    console.log(files);
}) */
//result: [ 'data', 'fs_demo.js', 'path_demo.js', 'test', 'users' ]

/* fs.readdir(path.join(__dirname, '/data'), (err, files) => {
    if (err) throw err;
    console.log(files);
}) */
//result: [ 'users.json' ]



//Copy a file
fs.copyFile(path.join(__dirname, '/data', 'users.json'), path.join(__dirname, '/data', 'copy.json'), err => {
    if (err) throw err;
    console.log('File copied')
})
// result if destination file exists : will copy content inside

// result if no destination file : it will be created and write the copy to it

// result if destination file has some data : it will replace it with the copyed data.

// result if no src  : it will throw an error