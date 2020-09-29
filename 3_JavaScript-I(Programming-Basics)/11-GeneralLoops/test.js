3//FOR LOOPS
for(i=10; i>0; i--){
    if(i == 2){
        console.log(`${i} is my lucky number`);
    break;}               //breaks loops // specific for loops
}

//WHILE LOOP
let j = 9;
let k = true;
while(j > 5 && k == true){
    console.log(`${j} is cool`)
    j--;
}



// DO WHILE

let t = 0;
do{                               //executes at least once the instruction and then checkes for the condition
    console.log(`${t} is cool`)
  
}while(t > 0)



//LOOP THROUGH ARRAY
//MAP
const users = [
    {id:1, name:'Andri'},
    {id:2, name:'Ali'},
    {id:3, name:'Sascha'},
    {id:4, name:'Jay'}
];
/* const ids = users.map(function(item){        //similar to for each
    return item.name
}); */
users.forEach(function(item,i){        //similar to for each
     users[i].id =
    item.id*item.id
});
console.table(users);


const user ={
    firstName:'Sascha',
    lastName:'Nelson',
    age:30
}
//FOR in LOOP
let cars = ['BMW','VW','Ford','Mercedes','Ferrari'];

for(let key in cars){          // key variable becomes a string  // string cant be use with dot // so cars.key doesnt work   // cars['key'] or cars[key] works
    //console.log(key)
    console.log(cars[key])
}

for(let key in user){
    //console.log(key)
    console.log(key, user[key])
}



/* for (variable in object)
  statement

variable
A different property name is assigned to variable on each iteration.

object
Object whose non-Symbol enumerable properties are iterated over. */