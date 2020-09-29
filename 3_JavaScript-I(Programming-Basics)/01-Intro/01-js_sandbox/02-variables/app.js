//var , let , const
//Examples: 
//declare a varialbe with var
var name = 'Johe Doe';
console.log(name);
//declare a varialbe with let
let email = 'address@domain.suffix';
console.log(email);
//re assign it
name = 'Safwan';
email = 'Safwan@webmail.de';
console.log(name,email);

//var G & L Scope

function show(){
    var num = 5;
    console.log(num);
}
var num = 9;
show();
console.log(num);
{
    var num = 7;
    console.log(num);
}
console.log(num);
//let & const G & L scope
function print(){
    let number = 107;
    console.log(number)
}
let number = 109;
console.log(number);
print();

//Init - declaring a variable without giving it a value
//this is allowed only uning var or let
let someThing;
console.log(someThing);

//Variable Name can consist of Numbers, Letters, _ , $
//Can not start with Numbers
// let 1stname = 'Olli';
//recommended camelCase names
let firstname = 'Ali ';
let secondName = 'Olli';
let fullName = firstname + secondName;
console.log(fullName);
//const
const myName = 'Johe';
console.log(myName);
//can NOT reassign a new Value
//myName = 'Steve';
//Can NOT init
//const myVar;
//exeption to const
//Objects and Arrays can be mutated
//Object Example :
const person ={
    name: 'Ray',
    age: 23
}
person.name = 'Jay';
person.age = 25;
console.log(person);
//But not like below
/* person = {
    name: 'Jay',
    age: 25
} */             //error

//Mutate Arrays
const array = [1,2,3];
array[1] = 'Changed value';
console.log(array);
array.push('Added Value');
console.log(array);
//But Not
//arr -[44,55]; //error