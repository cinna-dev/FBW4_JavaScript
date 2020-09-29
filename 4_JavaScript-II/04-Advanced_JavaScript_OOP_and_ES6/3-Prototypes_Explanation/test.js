function Animal(kind, sound, legs ,tail){  //Constructor function allways starts Capital Letter
    this.kind = kind ; // 'this' refering to function 'Person'
    this.sound = sound;
    this.legs = legs;
    this.tail = tail;
}

const myAnimal = new Animal('Dog', 'wau',4, true)

Animal.prototype.changeKind =function(kind){
    this.kind = kind
    if(kind == 'bird'){
        this.legs = 2
    }else{this.legs = 4}
}
myAnimal.changeKind('bird')
console.log(myAnimal)