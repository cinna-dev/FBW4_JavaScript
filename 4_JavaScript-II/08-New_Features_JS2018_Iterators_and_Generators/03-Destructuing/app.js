//Destucturing Assignment

let [a, b] = [100, 200] // assignment
console.log(a, b)

/// Rest pattern //
let [c, d, e, ...x] = [100, 200, 300, 500, 600, 700, 800, 900]
console.log(c, d, e, x)

 let {h,l} = {h:100,l:200}
console.log(h,l)

let {i, j,  ...y} = {i:100, j:200, h:300, l:400}
console.log(h,l,y)

/// Array Destructuring ///
const people = ['John','Jay','Andri']
const [person1,person2,person3] = people
console.log(person1,person2,person3)

/// Parse array returned from funciton ///
function getPeople(){
    return ['John','Jay','Andri']
}

let [person4,person5,person6] = getPeople()
console.log(person1,person2,person3)

/// Object Destructuring ///

const person = {
    name: 'John Doe',
    age: 32,
    city: 'Miami',
    gender:'Male',
    sayHello: function(){
        console.log('Hello')
    }
}

/// old ES5 ///
 const name2 = person.name,
age2 = person.age,
city2 = person.city, 

/// new Destructuring ///
{name,age,city,sayHello} =person
console.log(name,age,city, sayHello) // sayHello has been taken out of the Object
sayHello()