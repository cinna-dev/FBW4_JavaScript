//SETS - Store unique values of any type
//A Set is a special type of collection - "Set of values" (without keys),where each value may accure only once.

//set is much faster than creating a solution with an array that checks if the new entry already exists

//The alternative to Set could be an array of users, and the code to check for duplicates on every insertion using arr.find. But the performance would be much worse, because this method walks through the whole array checking every element. Set is much better optimized internally for uniqueness checks.

/**
 * new Set(iterable) - creates the set and if an iterable object is provided (usually an array), copies values from it into the set
 * set.add(value) - adds a value, returns the set itself.
 * set.delete(value) - removes the value, returns true if the value exists at the moment of the call, otherwise false
 * set.has(value) - returns true if the value exists in the set, otherwise false.
 * set.clear() - removes everything  from the set
 * set.size - is the element count.
 */

 //Create the set
 let set = new Set()

 let person1 = {name : "Peter"}
 let person2 = {name : "John"}
 let person3 = {name : "Mary"}

 //visits, some users come multiple times
 set.add(person1);
 set.add(person2);
 set.add(person3);
 set.add(person1);
 set.add(person3);
//set keeps only unique values
console.log(set.size)

//Iteration over Set

// We can loop over set either with for ... of, or using forEach :
for(let x of set){
   // x : takes place of value
    console.log(x)
}

//the same with forEach
set.forEach(item => console.log(item))

/**
 * set.keys() - return an iterable object for values, exists for compatibility with Map 
 * set.values() - same as set.keys()
 * set.entries() - returns an iterable object for entries [value, value], exists for compatibility with Map
 */

 //Convert set to array
 const setArr = Array.from(set)
 console.log(setArr)


/**
 * new Set(iterable) - creates the set and if an iterable object is provided (usually an array), copies values from it into the set
 * set.add(value) - adds a value, returns the set itself.
 * set.delete(value) -removes the value, returns true if the value exists at the moment of the call, otherwise false
 * set.has(value) - returns true if the value exists in the set, otherwise false.
 * set.clear() - removes everthing from the set
 * set.size - is the elment count.
 * can contain functions
 */

/// Create the set ///
let set = new Set();

let person1 = {
    name: "Safwan"
}
let person2 = {
    name: "Mustafa"
}
let person3 = {
    name: "Ahmad"
}

//visits, some users come multiple times
set.add(person1)
set.add(person2)
set.add(person3)
set.add(person1)
set.add(person2)
set.add(person3)
//set keeps only unique values
console.log(set)
console.log(set.size)

//Iteration over Set

// We can loop through set either with for ... of, of using forEach()
for (let value of set) {
    console.log(value)
}

//the same with forEach
set.forEach(item => console.log(item))

/**
 * set.keys() - returns an iterable object for values, exists for compatibility with Map
 * set.values() - same as set.keys()
 * set.entries() - returns an iterable object for entries [value, value], exists for compatibility with Map 
 */

//Convert set to Array

const setArr = Array.from(set)
console.log(setArr)