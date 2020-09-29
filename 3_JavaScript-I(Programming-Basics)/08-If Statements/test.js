/* 
if(something){
    //do these instructions
}else if(condition 2){
    //do other instructions
}
else {
    //do something else
}
 */

//const id =100;

// EQUAL TO
if(id == 100){
    console.log(true)
}else{
    console.log(false)
}

// NOT EQUAL
if(id != 100){             //!=  inequal
    console.log(true)
}else{
    console.log(false)
} 

//TEST IF UNDEFINED 
 if(typeof id == undefined){       
    console.log(`id is ${id}`)
}else{
    console.log(`it is defined and the value is ${id}`)
} 

// GREATER OR LESS THAN
 if(id < 101){       
    console.log(`${id} is less than 101`)
}else if(id > 101){
    console.log(`${id} is greater than 101 `)
}else{
    console.log(`${id} is equal to 101 `)
}   

 
//   LOGICAL OPERATORS
const name = 'Filiz';
const otherName = 'Ruth';
const age = 70;
const otherAge = 80;

//AND &&

if(name === 'Filiz' && otherName === 'Ruth' || age === 70 && otherAge === 80){       
    console.log(`Successful information`)
}else{
    console.log(`No Success`)
}   


//&& takes the last truth
//|| takes the first truth


// TERNARY OPERATOR   
/* 
cndition1 ? value1
            :conditon2 ? value2
            :other values
*/
function payLess(arr,name1 ,name2){
    return (arr.includes(name1) ? `${name1} pay for the shisha 2$` : arr.includes(name2) ?`${name2} pay for the shisha {}$`:`Other should pay for the sisha ${10}`) //condition(?) instruction (:)(else) instruction //condition(?) instruction (:)(else if)condition(?)(:)(else) instrution 
}

const arr = ['Safwan', 'Sascha', 'Ruth', 'Filiz'];
console.log(payLess(arr, 'Ruth', 'Filiz'));