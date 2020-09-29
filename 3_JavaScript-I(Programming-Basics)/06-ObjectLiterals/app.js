const person = {
    fistName: 'Stefan',
    lastName: 'Smith',
    age: 28,
    email: 'zerocode@aol.com',
    hobbies: ['sleeping','eating','shopping'],
    address:{
        city:'Winterhude',
        state:'Hamburg'
    },
    getBirthYear: function(){
        return 2019 - this.age;   //this. = instant from "Person"
    }
}
let val;
val = person;
//Access one property
val = person.fistName;      //person. hover over it = will show all properties
val = person['lastName'];   //alternative way
val = person.hobbies[1];    //access index of array in object
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val)