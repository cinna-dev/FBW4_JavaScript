// prototype is an invisible property of all objects that we create, it has typeof 'object' 
// it has some predefined methods like 'isPropertyOf()' and more 
// We can use prototype to ass extra properties after we finished our objcect or constructor definition 
// the extra added properties using prototype it will be added to all instances from that object

/* let animal = {
    eats : true,
}
let rabbit = {
    jumps : true
} */

// with constructor we use .prototype
// with object we use .__proto__

//rabbit.__proto__ = animal  //animal overwrights the __proto__ but animal itself still has the default __proto__ 

//rabbit.__proto__.ears = 2
//console.log(rabbit.eats)
//console.log(rabbit.__proto__) //__proto__ invisible Object  // Aotmatically added
//console.log(rabbit)


//Arrow function can not be used for Constructors
/* const Animal= function(eats){  
    this.eats = eats
}
let animal1 = new Animal(true)
console.log(animal1) */

/* let longEars = {
    earlength : 10,
    __proto__ : rabbit
} */
// let animal = nev Animal(true)
//console.log(longEars.eats)

///////////////////// exercise ///////////////////


const user = {
    name: 'username',
    pass : 'password',
    changePassword : function(newPass){
        this.pass = newPass;
    }
}

const guest = {
    type : 'guest',
    authorities : ['read'],
    __proto__ : user
}

console.log(guest.changePassword('myEasyPass'))
console.log(guest.pass)
///////////////////// exercise ///////////////////
const admin = {
    __proto__ : guest,
     modifyAuths : function(addOrDel, item){
        if(addOrDel && item){    
        this.authorities.push(item)
        }else if (addOrDel == false && item){
            if(this.authorities.length ){
            this.authorities.forEach((item2,i,arr)=>{
                if(item2 == item){
                    this.authorities.splice(i,1)
                }
            })
        }
        }else if(addOrDel == false && item == undefined){
            this.authorities.splice(this.authorities.length-1,1)
        } 
        return this.authorities
    }
}
admin.modifyAuths(true ,'walk')
admin.modifyAuths(false,'walk')
admin.modifyAuths(false)
console.log(admin.authorities)
console.log(admin)

///////////////////////// Official Solution /////////////////////
const guest2 = {
    type : 'guest',
    authorities : ['read'],
    __proto__ : user
}

const admin2 = {
    __proto__ : guest2,
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
admin2.modifyAuths(true ,'walk')
admin2.modifyAuths(false,'walk')
admin2.modifyAuths(false)
console.log(admin2.authorities)
console.log(admin2)



function Product(iName, iprice){
    this.name = iName;
    this.price = iprice;
    this.gtPrice = function(){
        return this.price
    }
}

const p1 = new Product('MyPhone', 250)
console.log(p1)

function Food(fName, fPrice , iVegan){
    Product.call(this,fName,fPrice) //like in Product __proto__ : Product  // 'this' in constructor tells it that this now means Food not Product
    this.category = 'food';
    this.vegan = iVegan;
}

const p2 = new Food('Salad',3,true)
console.log(p2)
console.log(p2.gtPrice())


////////////////////////////// Exercise ////////////////////

function User(name,pass){
    this.name = name ;
    this.pass = pass;
    this.changePassword = function(newPass){
        this.pass = newPass;
    } 
}

function Guest(type, authorities ,name,pass) {
    User.call(this,name,pass);
    this.type = type;
    this.authorities = authorities;
}

const guest3 = new Guest('guest',['read'],'username','password')
guest3.changePassword('blubb')
console.log(guest3)
