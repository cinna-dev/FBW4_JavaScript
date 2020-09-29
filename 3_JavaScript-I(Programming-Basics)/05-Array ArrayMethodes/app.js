// create some arrays
const numbers = [43,56,33,,5823,44,36,5];
const numbers2 = new Array(143,156,133,123,144,136,-5); // Obsolete
const fruits = ['Pear',33,'Orange',65,'alemon',9,'Bannana','Apple'];
const mixed = [22,'Hello',true,undefined,null,{a:1,b:2},new Date()];

const nonArray = {x:5,y:4};

let val;

//Get array Length 
val = numbers.length;
//Check if it is an Array
val = Array.isArray(mixed)  //access Global Array

//Access the array elements
val = numbers[2];
val = mixed[5];

//Insert\Replace into the Array
val = numbers[2] = 100;
//Find index of value
val = numbers.indexOf(100);

//MUTATING ARRAYS

//Add to the end
numbers.push(250);

//Add to the beginning
numbers.unshift(4);

//remove item from end
numbers.pop();

//remove item from the beginning
numbers.shift();

//slice values // cut out 
const numbers1 = [43,56,33,23,44,36,5];

//val = numbers1.splice(0,2)// leaves "numbers1" with the cutouts excluded. //"val" inherents the cutouts //splice(startingIndex, amount of cuted indexes from the startingIndex on (starting index included))

//Slice
//val = numbers1.slice(2,3)//"val" inherents the copy of the "slice" //slice(startingIndex,EndIndex)//(0,1)first index (2,3) secondIndex

//reverse
//numbers1.reverse();

val = numbers.concat(numbers2)  //merge to arrays

//Sorting Arrays
val = fruits.sort()
//use "compare function" //fixing sort
val = numbers.sort(
    function(x,y){
        return x - y
    }
)
//Join
let str = 'Safwan am I there hello';
//console.log(str)
let arr = str.split(' ');
arr.reverse();
str = arr.join(' '); //reverse of split // joins arrays together and inputs () between them

//console.log(arr);
//console.log(str);

//Find
function over50(num){
    return num > 50;
}
val = numbers.find(over50); // return the first number in an array that is over 50. // self invoking function can be calle without Parantetheses
console.log(val);

