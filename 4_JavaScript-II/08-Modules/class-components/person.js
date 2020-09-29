class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    sayYourName() {
        return `Hi, my name is ${this.name}`
    }
}

function makeHimSayHisName(human) {
    return human.sayYourName()
}

function makeHerSayHerAge(human) {
   return human.age
}

export default Person;
export {makeHimSayHisName, makeHerSayHerAge}