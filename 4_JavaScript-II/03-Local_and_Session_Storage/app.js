// only ment for small date 
// Local Storage vd Session Storage
// They are exactly the same 
// The only difference
// Local Storage keeps the saved data even if you close the browser and you need to clear it manually

// Session Storage doesn't keep the data when you close the browser and open it again

// set Local Storage Item 
// the key and the value should be string
localStorage.setItem('test','test'); // key,value


// Set session Storage Item
sessionStorage.setItem('name','Mr.Harris')
// Datalimit for Chrome , Firefox ond Opera is 10mb.

//Remove item from Local Storage
//localStorage.removeItem('name') //key

//localStorage.setItem('name','Safwan')
//localStorage.setItem('age','25')
//get Property from Local Storage
const x = localStorage.getItem('name')
const y = localStorage.getItem('age')


// Clear Local Storage
localStorage.clear() 
console.log(x,y)

//let tasks = [];
// add multiple properties with the same key but different values
document.querySelector('form').addEventListener('submit',function(e){
    const task = document.getElementById('task').value;
    let tasks
    if(localStorage.getItem('tasks') == null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))// JSON.parse() string to Attay  // get the json data and convert back
    } 

    tasks.push(task)

    localStorage.setItem('tasks',JSON.stringify(tasks)) // Array to String 
    e.preventDefault();
})