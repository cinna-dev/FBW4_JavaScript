// original
/* function sum(a,b){
    return a + b;
} */

// alternative
/* let sum = function(a,b){
    return a + b;
} */

// Arrow Function
let sum = (a,b) => a + b;

let duplicate = n => n * 2;  // doesnt need an Argument Area when it only has one argument   //Shortest way to wrigth an arrow function

let pow = (x,n)=> {            // Longest way to wirght a arrow function
    if(n == 0) return 1        // no need for braces when only used one singel expresion
    let result = x
    for(i=1; i<n; i++) result*= x //l result = reasult * x
    return result
};

let sayHi = () => console.log('Hi')

sayHi()
let result = sum(150,2025)
result = duplicate(8)
console.log(result)
console.log(pow(2,4))






///////////////// Exercise ///////////////





