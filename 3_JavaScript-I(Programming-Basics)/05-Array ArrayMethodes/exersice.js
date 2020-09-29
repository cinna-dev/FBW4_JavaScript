/* const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(143,156,133,123,144,136,-5); // Obsolete

NewArr = numbers.concat(numbers2);

NewArr.sort(
    function(x,y){
    return x-y
}
);
console.log(NewArr); */


/* function passedPercent(arr){
    let counter= 0;
    for(i=0;i<arr.length;i++){
        if(arr[i] <= 50){
            counter++
        }
    }
    return `${(counter / arr.length )*100}%`; 
}
const results = [78, 82, 45, 69, 23, 91, 55, 39, 66, 60];
console.log(passedPercent(results)); */

function firstPersonOver50(arr){
   return arr.find(function(persons){      //find Method will loop through
       return persons.age > 50;
   })
}
const personsAge =[{name:'A',age:32},{name:'B',age:51},{name:'C',age:76}];
console.log(firstPersonOver50(personsAge)); 