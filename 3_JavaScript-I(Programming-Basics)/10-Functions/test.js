//Function Declaration
//run code without calling the function to debug syntax errors

function greet(firstName = 'Jay'){  // assign a default value to a parameter    
    return'Hello '+ firstName;
};
let val = greet('blub');
console.log(val); 

//FUNCTION EXPRESSION

const square = function(x=1){
    return x*x;
};

console.log(square(8));

//IMMIDIATELY INVOKABLE FUNCTION EXPRESSION - IIFEs

(function(x){                //Anonymous Function
   console.log(x*x)
})(4)

//PROPERTY METHODS
const todo ={
    list:[],
    add: function(item){
        this.list.push(item)
    },
    edit: function(id,value){
        this.list[id] = value;
    }
}
todo.add('eat');
console.log(todo.list);
todo.edit(4, 'running');
console.table(todo.list);
//ADDING FUNCION TO OBJECT
todo.delete = function(){
    console.log('Delete item')
}
todo.delete()

