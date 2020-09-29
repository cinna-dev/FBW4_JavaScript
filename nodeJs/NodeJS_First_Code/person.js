/* const person = {
    name: 'Jay',
    age: 27
} */
// node converts all js code to es5 internaly

//export {person}  // not supported in node.js



/* (function(export, require, module, __filename, __direname){

}) */ // every js file is wrapped by this function



//console.log(__dirname)
//console.log(__filename)
console.log(module)
//console.log(require)
//console.log(export)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introMe() {
        console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }
}


module.exports = Person;