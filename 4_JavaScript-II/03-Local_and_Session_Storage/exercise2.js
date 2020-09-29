document.querySelector('.clear-tasks').addEventListener('click',clearStorage)
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
    document.getElementById('task').value = '';
    createLi()
})

    const ul = document.createElement('ul');
    ul.className = "collection";
    ul.addEventListener('click',deleteItem)
    const content = document.querySelector('.card-content')
    content.appendChild(ul)

function createLi(){
    //first removes all li's from live ul
    Array.from(ul.children).forEach(function(item){
        item.remove();
    })   
    // loads Storage and then creates li's of it
    if(localStorage.getItem('tasks') != null){
    JSON.parse(localStorage.getItem('tasks')).forEach(function(item){
        const li = document.createElement('li')
        li.className = "collection-item"
        li.appendChild(document.createTextNode(item))
        const a = li.appendChild(document.createElement('a'))
        a.className = "delete-item secondary-content";
        a.setAttribute('href', '#');
        const i = a.appendChild(document.createElement('i'))
        i.className = "fa fa-remove";
        ul.appendChild(li);
        })
    }
}

function deleteItem(e){
    if(localStorage.getItem('deletedTasks') == null){
        deletedTasks = [];
    }else{
        deletedTasks = JSON.parse(localStorage.getItem('deletedTasks'))}
        
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    const delItem = e.target.closest('li')
    Array.from(document.querySelectorAll('.collection-item')).forEach(function(item,i){
        if(item == delItem){
           let item2 = tasks.splice(i,1)
           deletedTasks.push(item2.toString())
        }
    })
    if(localStorage.getItem('tasks').length == 0){
        localStorage.removeItem('tasks')
    }
    localStorage.setItem('deletedTasks',JSON.stringify(deletedTasks))
    localStorage.setItem('tasks',JSON.stringify(tasks))
    createLi()
} 

function clearStorage(e){
    e.preventDefault()
    localStorage.clear() 
    createLi()
}