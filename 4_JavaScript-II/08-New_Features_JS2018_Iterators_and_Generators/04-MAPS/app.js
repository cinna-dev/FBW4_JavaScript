//Object extra infos
/* let person = {

}
person.age = 45;
person['firstname'] = 'Harris'
let key = 'lastname'
let value = 'Riaz'
person[key] = value;
console.log(person) */

//MAPS = key-value pairs -can use ANY type as a key or value

// Create a map
const map1 = new Map();
//Map is a collection of keyed Data items, just like Object. But he main difference is that Map allows keys of any type

/**
 * new Map() : creates the map
 * 
 * map.set(key,value) - stores the value by the key
 * 
 * map.get(key) - returns the value stored by the key, 'undefined' if key doesn't exists in map
 * 
 * map.has(key) - returns true if the key exists and false otherwise
 * 
 * map.delete - removes the value of the key
 *   
 * map.clear - removes everything from the map
 * 
 * map.size - returns the current element(key) count
 * */

//map.size


//Set keys  //example what keys may look like
const key1 = 'somethng!',
    key2 = {b:4},
    key3 = function () {console.log('Hi')};

//set map values for the keys keys
map1.set(key1, 'Value of key1')
map1.set(key2, 'Value of key2')
map1.set(key3, 'Value of key3')

console.log(map1.size)

//Get value by key

console.log(map1.get(key1))
console.log(map1.get(key2))
console.log(map1.get(key3))
//Iterating MAPs
//Loop using for ... of
console.log(map1)
let person = {
    name: 'safwan',
    number: '0213131'
}
for (let [key, value] of map1) {
    console.log(`${key} : ${value}`)
}

for (let key of map1.keys()) {
    console.log(key)
}

// Iterate values only
for(let value of map1.values()){
    console.log(value)
}

//Loop with forEach
map1.forEach((item,key)=>{
    console.log( `${key} = ${item}`)
})

//Convert to Arrays
//Create an array fo key/value pairs
const keyValArr = Array.from(map1)
console.log( keyValArr) // one array for each key and item
console.log( keyValArr[0][1])


//Create an array fo keys 
const keyArr = Array.from(map1.keys())
console.log( keyArr)

//Create an array fo values
const valArr = Array.from(map1.values())
console.log(valArr)