const num1 = 100;
const num2 = 50;
let val;

//Simple math with Numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

//Math Object
val = Math.PI;
val = Math.E; 
val = Math.round(2.5);  // <0.5 round down; >= 0.5 rounds up
val = Math.ceil(2.1);   //rounds up
val = Math.floor(2.8);  //rounds down
val = Math.sqrt(64);    //square root
val = Math.abs(-3);     // makes it a positve number
val = Math.pow(8,2);    //squared // 8^2
val = Math.min(2,33,4,1,55,6,3,-2);
val = Math.max(2,33,4,1,55,6,3,-2);
val = Math.random();

val = Math.floor(Math.random()*20+1)
console.log(val);