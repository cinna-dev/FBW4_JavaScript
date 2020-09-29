// Class Basic Syntax for Declaration
class User{ //Class Name also should start with capital letter 
    // We should start with constructor  // instance of Class will be a Object  // Class == template
    constructor(userName, passWord){  // normal properties of the Object
        this.name = userName
        this.pass = passWord
    }
    // we write the properties inside the constructor 
    // but we wright the methods outside the constructor 
    changePassword(newPass){
        this.pass= newPass
    }
} 

// the Usage (die Verwendung):
let u1 = new User('Kumaro','1234')  // class is using its constructor to construct the object
console.log(u1)





///////////////////////// Exercise /////////////////////////////

class Person{
    constructor(fistName, lastName, dob){
        this.firstName = fistName
        this.lastName = lastName
        this.birthdate = new Date(dob)
    }
    greetings(){
        return `Hello ${this.firstName} ${this.lastName}`
    }
    calculateAge(){
        let diff = Date.now() - this.birthdate.getTime()
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear()- 1970)
    }
    getMarried(newLastName){
        this.lastName = newLastName
    }
}

const person1 = new Person('Peter','Pan','05-12-1987')
person1.getMarried('Mercedes')
console.log(person1.greetings())
console.log(person1.calculateAge())
console.log(person1)


//Alternative Way To Declare a Class 
const Book = class{
    constructor(title,author){
        this.title = title
        this.author = author
  
    }
    givePrice(price){   //method assigns properties to the object 
        this.price = price
    }
}
let b1 = new Book('JS','Max',35)
b1.givePrice(45)

console.log(b1)





//////////////////  Exersise /////////////////

class Book2{
    constructor(title,author,price){
        this.title = title
        this.author = author
        this.price = price
    }
    changePrice(newPrice){
        this.price = newPrice
    }
}

const it= new Book2('IT','Seven King',12)
it.changePrice(8)
console.log(it)


