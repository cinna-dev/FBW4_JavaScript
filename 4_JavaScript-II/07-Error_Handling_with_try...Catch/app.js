const user = {
    email: 'safwan@email.test'
};
// try instructions // catch: output error
try {
    console.log('Hello Jay') 

    //Makes a Reference Error
    //myFunction()

    //Make a TypeError
    //null.myMethod()

    //Make a SyntaxError
    //eval('Hello Lana')

    if(!user.name){
        //throw 'User has no name'
        throw new SyntaxError('User has no name')
    }
} catch (err) {
    console.log(err)    // ReferenceError // but it will be caught
    console.log(`UserError: ${err.message}`)
}finally{
    // finally : will be executed no matter what
    console.log('do the rest of the code')
}

console.log('Program continues')
    cosole.log('Hello Jay') //Uncaught ReferenceError
// create custom error for other users to understand what went wrong