let animal = {
    kind : 'Cat',
    sound : 'miau',
    legs : 4,
    tail: true,
    hello: function(){return this},
    numOfLegs : function(){
        return this.legs;
    }
}
// this is an instance of the object 'animal'
//console.log(animal, animal.numOfLegs())
//console.log(animal['numOfLegs']()) //alternative way of calling a method
console.log(this)   // will return window object

// the variabe inhibits the reference to the object but the object itself doesnt really has a name
// this referce to the instance that referce of the object

//////////////////////////////////////////////////////////////////////////
const person = {
    firstName: 'Merry',
    lastName : 'Christmas',
    birthdate : new Date('9-10-1994'),
    calculateAge : function(){
        const diff = Date.now() - this.birthdate.getTime(); // now (in ms) and getTime() (in ms) // diff is the age in millseconds //Date.now() returns ms starting from 1970 
        const ageDate = new Date(diff);

        return Math.abs(ageDate.getUTCFullYear() - 1970) // Math.abs transform to positive Number // getUTCFullYear() gets the year from Date Object since 1970
    }
}
//console.log(person.calculateAge())

////////////////////////////////////////////////////////////////////////////////

//Person Constructor

function Person(name, dob){  //Constructor function allways starts Capital Letter
    this.myname = name ; // 'this' refering to function 'Person'
    this.birthdate = new Date(dob)
    this.calculateAge = function(){
        const diff = Date.now() - this.birthdate.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
    this.hello = function(){return this}
}

const trainer = new Person('Mustafa', '08-19-1987') // constructoed Object 
console.log(trainer.calculateAge())
//console.log(trainer.hello())
//console.log(animal.hello())

function Animal(kind, sound, legs ,tail){  //Constructor function allways starts Capital Letter
    this.kind = kind ; // 'this' refering to function 'Person'
    this.sound = sound;
    this.legs = legs;
    this.tail = tail;
    this.numOfLegs = function(){ //get method
        return this.legs
    }
    this.changeKind = function(kind){ //setter method
        this.kind = kind;
    }
}
const myAnimal = new Animal('Dog', 'wau',4, true)
myAnimal.changeKind('bird')
console.log(myAnimal.kind)