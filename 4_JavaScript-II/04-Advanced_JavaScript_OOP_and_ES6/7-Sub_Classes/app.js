class Person{
    constructor(fistName, lastName){
        this.firstName = fistName
        this.lastName = lastName
    }
    greetings(){
        return `Hello ${this.firstName} ${this.lastName}`
    }
}
class costumer extends Person{ // 'Class' subClassOf 'Class'
    constructor(costumerFistName, costumerLastName, phone, membership){
        super(costumerFistName, costumerLastName)   // super = redefines this to the extended class // also redirects the arguments to the extended class
        this.phone = phone
        this.membership = membership
    }
    setMembershipCost(cost){
        this.membershipCost = cost
    }
}
let costumer1 = new costumer('Peter','Pan', 12231231, 'standart')
// constructing Person will give a standart defined version of this Object
// constructing costumer will give a more advanced version of Person
costumer1.setMembershipCost(12)
console.log(costumer1.greetings())
console.log(costumer1)


/////////////////////// Exersice ///////////////////

class Book{
    constructor(title,author,price){
        this.title = title
        this.author = author
        this.price = price
    }
    changePrice(newPrice){
        this.price = newPrice
    }
}

class Magazin extends Book{
    constructor(title,author,price,year){
        super(title,author,price,)
        this.year = year
    }
    showYear(){
        return this.year
    }
}
const book1= new Magazin('IT','Seven King',12,'1980')
book1.changePrice(8)
console.log(book1.showYear())
console.log(book1)



class Property{
    constructor(location, size){
        this.location = location
        this.size = size
    }
}

class Flat extends Property{
    constructor(location, size, owner, priceM2){
        super(location, size)
        this.owner = owner
        this.priceM2 = priceM2
    }
    calculatePrice(){
       return Math.abs(this.priceM2) * Math.abs(this.size)
    }
}

class Clinik extends Flat{
    constructor(location, size, owner, priceM2, types, doctors){
        super(location, size, owner, priceM2)
        this.types = types
        this.doctors = doctors
    }
}

class Person2{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
}

class Doctor extends Person2{
    constructor(firstName, lastName, spesialized ,experience){
        super(firstName, lastName,)
        this.spesialized = spesialized
        this.experience = experience
    }
} 

let pers1 = new Doctor('Peter','Pan',['heartOperation','CancerTreatment'],'advanced')
let pers2 = new Doctor('Peter','Pan',['heartOperation','CancerTreatment'],'advanced')
let pers3 = new Doctor('Peter','Pan',['heartOperation','CancerTreatment'],'advanced')
console.log(pers1)
let prop = new Clinik('Hamburg',650,pers1,80,['bone','diseas'],[pers1,pers2,pers3])

console.log(prop)
console.log(prop.calculatePrice())