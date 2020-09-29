let animal = {
    eats : true,
    doesEat : function(){
        return this.eats
    }
}

// Create a new Object using Object.create

//1st way // create Object and define propertie
let rabbit = Object.create(animal ,{ // .create(inherent Object properties (prototype) , own properties ) // needs prototype
    longEars:{value:2},
    jumps:{value:true},
    
}) 
console.log(rabbit)

//2nd way // create Object and define propertie
let rabbit2 = Object.create(animal)
rabbit2.langEars = 2
rabbit2.jumps = true
console.log(rabbit2)



// best practice
const personProtos = {
    greetings : function(){
        return `Hello miss ${this.firstName} ${this.lastName}`
    },
    getsMarried : function(newLastName){
        this.lastName = newLastName
    }
}

const person = Object.create(personProtos)
    person.firstName = 'Farah'
    person.lastName = 'Yousef'
    person.age = 25
    person.marrialSatus = 'single'


person.getsMarried('Nelson')
console.log(person.greetings())
console.log(person)


/////////////// Exersice ///////////////////

const userProts = {
    changePassword : function(newPass){
        this.pass = newPass;
    },
    modifyAuths : function(addOrDel, item){
        if(addOrDel){
            if(item){
               this.authorities.push(item) 
            }else{
                console.log("we cant't add empty item")
            }
        }else{
            if(item){
                let pos = 0 
                for(i=0; i< this.authorities.length; i++){
                    if(this.authorities[i] == item) pos = i
                }
                if(pos > 0) this.authorities.splice(pos,1)
                else console.log('Sorry item does not exist')
            }else this.authorities.pop()  
        }
        return this.authorities
    }
}

const user = Object.create(userProts)
    user.name = 'username'
    user.pass = 'password'
    user.role = 'user'
    user.authorities = ['read']

const guest = Object.create(user)
    guest.type = 'guest'
    
const admin = Object.create(guest)
    admin.adminRights = true
    

console.log(admin.modifyAuths(true,'walk'))

console.log(admin)
