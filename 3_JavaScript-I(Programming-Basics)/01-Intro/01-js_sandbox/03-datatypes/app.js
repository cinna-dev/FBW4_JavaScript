//PRIMITIVE

//STRING
const name = `${1+1+1} People are here`;
console.log(typeof name);

//NUMBER    
const age = 45;
console.log(typeof age);

//BOOLEAN
const hasChild = false;
console.log(typeof hasChild);

//NULL
const car = null;
console.log(typeof car); //will show object but that is a bug type is null.

//Undefined
let test =undefined;
console.log(typeof test);

//Symbol
const sym = Symbol();
console.log(typeof sym);



//REFERENCE TYPES - OBJECTS
// Array
const hobbies = ['coding','cooking'];
console.log(typeof hobbies);

//Object literal
const address = {
    city: 'Dubai',
    country: 'UAE'
}
console.log(typeof address);

//Date
const today = new Date();
console.log(typeof today);

//REFERENCE vs PRIMITIVE TYPE
let x = {name: 'Safwan', age:32};
let y =1200;
let a, b;
a = x;
console.log(a);
x.name = 'Saf1';
console.log(a);
a.name = 'Safwan';
console.log(x);               //x and a refere to the same data
b = y;
console.log(b);
y = 1000;
console.log(b);               //y does not reference to the same data as b//it made a copy o b
