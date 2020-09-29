// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const ClearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
//console.log(form,taskList,ClearBtn,filter,taskInput)

// Load all event listeners 
loadEventListeners();

//Defining the Function that will Load all event listeners 
function loadEventListeners(){
    //Add Task Event
    form.addEventListener('submit',addTask)
}

//Add Task Event Handler
function addTask(e){
    //check if the Task Input is Empty
    //Create li element
    //Style the li
    //Create a Text Node append to li
    //Create new link element
    //Give the link a Style
    //Add an icon html
    //Append the lin to li
    //Append the li to ul
    if(!taskInput.value){
        alert('Add a Task')
    }else{
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const a = document.createElement('a');
    a.className = 'delete-item secondary-content';
    a.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(a);
    taskList.appendChild(li);
    taskInput.value = ''
    e.preventDefault();
    }
}