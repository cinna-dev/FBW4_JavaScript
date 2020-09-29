function Student(){
    this.name = 'Maria';
    this.gender = 'Female';
}
Student.prototype.age = 15  // will be added to the constructer after effect // so it does not directly show up in the constructed Object but it will be added to the prototype property of the Object
Student.prototype.myName = function(){
    return `Hi this is ${this.name}`;
}

let studentOne = new Student();



//studentOne.age = 15; // only effects the studentOne 
let studentTwo = new Student();
studentOne.age = 20 ;
for(x in studentOne){
    console.log(x,`${studentOne[x]}`)
}
console.log(studentOne.__proto__.age)
console.log(studentOne) 
console.log(studentOne.age) 
console.log(studentOne.myName())
// Prototype is invisible property of an Object.
//It returns prototype Object of a function to which it links to.

//Person Constructor
function Person(f, l, dob){
    this.firstName = f
    this.lastName = l
    this.birthday = new Date(dob)
    /* this.calculateAge = function(){
        const diff = Date.now() - this.birthdate.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    } */
}
//Calculate Age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

person1 = new Person('Mustafa','Othman','08-19-1987')
console.log(person1)
console.log(person1.calculateAge())
let person2 = new Person('Maria','Smith','08-19-1996')
Person.prototype.getsMarrid = function(newLastName){
    this.lastName = newLastName;
}

person2.getsMarrid(person1.lastName)
console.log(person2)

//Get full name

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

console.log(person2.getFullName())

//more practical way is to add methods via prototype // instead of constructing them in the first place