const Person = require('./person')

class User extends Person {
    constructor(name, age) {
        super(name, age)
        this.authoritys = [];

    }
    addAuthority(authority) {
        this.authoritys.push(authority)
    }
}

module.exports = User;