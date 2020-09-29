// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const ClearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
const undoBtn = document.querySelector('.undo-task');
//console.log(form,taskList,ClearBtn,filter,taskInput)

// Load all event listeners 
loadEventListeners();

//Defining the Function that will Load all event listeners 
function loadEventListeners(){
    //Add Task Event
    form.addEventListener('submit',addTask)
    //remove Tasks Events
    taskList.addEventListener('click', removeTask)
    //clear Tasks Event
    ClearBtn.addEventListener('click', clearTasks)
    //Filter tasks Event
    filter.addEventListener('keyup', filterTasks)
    //Undo
    undoBtn.addEventListener('click', undoTasks)
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
        alert('Add a Task');
        e.preventDefault();
    }else{
        
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const a = document.createElement('a');
    a.className = 'delete-item secondary-content';
    a.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(a);
    li.index = taskList.children.length
    taskList.appendChild(li);
     e.preventDefault();
    storeTaskInLocalStorage(taskInput.value)
    taskInput.value = '';
   
    }
}
//localStorage.clear()
//Store in LS
function storeTaskInLocalStorage(task){
    //Initialize the Tasks Array
    let tasks;
    //getting the Tasks Array from the Local Storage and Checking if there is no Tasks yet, Define it as Empty Array
    if(localStorage.getItem('tasks') == null){
       tasks = [];
    //Else Take it ready and assign it to Tasks Array
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    //Push th Task to it
    tasks.push(task)
    //Save it back to the Local Storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove Task Event Handler
 function removeTask(e){
     //Choosing our target : class "delet-item"
    /*  const target = e.target.closest('.delete-item')// closest() with class
    if(target){
        if(confirm('Are you sure?')){
        target.parentElement.remove()
        }
    }  */
     if(e.target.parentElement.classList.contains('delete-item')){
         if(confirm('Are you sure?')){
             e.target.parentElement.parentElement.remove(); 
         }
     }
     removeTaskFromLocalStorage(e.target.parentElement.parentElement)
     
} 

//Remove from LS
function removeTaskFromLocalStorage(taskItem){
    //Initialize the Tasks Array
    let tasks;
    //Check if there is any tasks in the LS
    if(localStorage.getItem('tasks') == null){
        //if there is no tasks : then tasks =[]
       tasks = [];
    }else{
        
        //else tasks = the cureent array in LS

        tasks = JSON.parse(localStorage.getItem('tasks'));
        //loop inside the tasks array
        //Don't use forEach when zou are changing
         for(i=0; i<tasks.length;){
             //if the task in the tasks item matches then remove it form the tasks array
            if(tasks[i] == taskItem.textContent){
            tasks.splice(i,1);
            
            
            
            }else{i++} 
            // deletedTask        
    }

       //Experimental
           /*  for(i=0; i<tasks.length;i++){ 
                console.log(tasks[i],taskItem.closest('li').index, i ,) 
                console.log( taskItem.closest('li'))
                console.log(i == taskItem.closest('li').index)
            if(i == taskItem.closest('li').index){
                tasks.splice(i,1);
                }
            }  */
        let deletedTasks;
        if(localStorage.getItem('deletedTasks') == null){
        deletedTasks = []
        }else{
            deletedTasks = JSON.parse(localStorage.getItem('deletedTasks'));
        }
        deletedTasks.push(taskItem.textContent)
        localStorage.setItem('tasks',JSON.stringify(tasks))
        localStorage.setItem('deletedTasks',JSON.stringify(deletedTasks)) 
        }
    }

//Clear Tasks Event Handler
//https://jsperf.com/innerhtml-vs-removechild/47
function clearTasks(e){
    //taskList.innerHTML = '';
    while(taskList.firstChild){
       taskList.removeChild(taskList.firstChild);
    }
    let deletedTasks;
    
       deletedTasks = localStorage.getItem('tasks')
   
    localStorage.setItem('deletedTasks',deletedTasks)
    localStorage.removeItem('tasks')
    //localStorage.clear()
    e.preventDefault()
}

//filter Tasks Event Handler
function filterTasks(){
    Array.from(taskList.children).forEach(function(item){
        item.style.display = (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())? 'block' : 'none')
    })
}

function undoTasks(e){
    const tasks = JSON.parse(localStorage.getItem('deletedTasks'))
    console.log(tasks)
    tasks.forEach(function(item){
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(item));
    const a = document.createElement('a');
    a.className = 'delete-item secondary-content';
    a.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(a);
    li.index = taskList.children.length
    taskList.appendChild(li);
    storeTaskInLocalStorage(item)
    //removeTaskFromLocalStorage(li)
    
    })
    localStorage.removeItem('deletedTasks')
    e.preventDefault();
}


//Homework add button undo 