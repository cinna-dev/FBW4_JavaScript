//String 

const name1 = 'Lana';
let name2 = new String('Lana')  // Predefined Object constructor . Property is just String

if(name2 == 'Lana'){
    //console.log('yes')
}else{
    //console.log('no')
}
//console.log(name1 , typeof name1);
//console.log(name2 , typeof name2);

// Number

const num1 = 5
const num2 = new Number('5')
console.log(num2)

// Boolean
const bool1 = true;
const bool2 = new Boolean('')    //string value always = true //string empty = fals
console.log(bool2)

// Object
const person1 = {name:'Kinan'}  // recomended
const person2 = new Object({name:'Kinan'})  // before 2012
console.log(person1)
console.log(person2)

// Arrays
const array1 = [1,2,3,4] // recomended
const array2 = new Array(1,2,3,4)  // before 2012
console.log(array1)
console.log(array2)

// Regular Expresion
const re1 = /\w+/
const re2 = new RegExp('\\w+')  // '\ makes it read the ' as string therfore \\
console.log(re1)
console.log(re2)