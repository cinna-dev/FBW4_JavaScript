const arr = [1,2,3,4,5,6,'str',7,8,23,12]
/* let max ;
 max = arr[0];
for(i=1;i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
} */


console.log(Math.max(...arr)) // in argument area //Spread // spreads array into the parameters
console.log(...arr) //spread Operator   

function avrage(a,b,c){
    return (a + b + c) /3
}

// Rest Operator
function avragelength(...numbers){  // in parameter area // rest // creates array
    let sum = 0
    for(i=0; i< numbers.length; i++){
        sum += numbers[i]
    }
    return sum / numbers.length;
}

let x = avrage(1,2,3)
console.log(x)
console.log(avragelength(1,2,3,4,5,6))

// using spread in Objects
let obj0 = {
    name: "Jay",
    age: 28
}
let obj1 = {...obj0}     // spread to copy Object // spreads the properties of the first object into a new one
console.log(obj1)

/////////////////////////////////////////



let obj2 = {
    firstName: "Jay",
    age: 28
}

let obj3 = {
    secondNsme : "second name",
    gender : "male"
}
let obj4 = {...obj2 , ...obj3 , nationality : "German"} //copying and combining to Objects via spread operator

console.log(obj4)


// Destructuring:
let ar = [10, "first String", "second Sting",22,1,2];
let firstString = ar[1];
let secondString = ar[2];
let[,firststring , secondstring] = ar // spread out arr into new defined variables // excludes the first variable [,a,b]
let[firstNumber , , ,lastNumber ,...rest] = ar 
console.log(firststring, secondstring,)
console.log(firstNumber, lastNumber, rest)


//Destructuring in Objects

const ob = {firstName : "Mostafa", lastName : "Othman", age : 50};
let newOb = {firstName, age} = ob;
console.log(firstName,age , ob)

// Rest operators

const  numbers = [1,2,3]; // 1 [2,3]
const [fnumber, ...Rnumbers] = numbers;
console.log(fnumber, Rnumbers)

const [...bla] = document.querySelectorAll('.bla')
console.log(bla)
document.querySelectorAll('.bla').forEach((x)=>{
console.log(x)
})
console.log(document.getElementsByTagName('div')) //HTMLCollection not array 
document.getElementsByTagName('div').forEach((x)=>{
    console.log(x)
    })