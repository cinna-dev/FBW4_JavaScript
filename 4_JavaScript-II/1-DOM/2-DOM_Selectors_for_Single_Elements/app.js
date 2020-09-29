//document.getElementById();
//console.log(document.getElementById('task-title'));

//Get things from the element

//console.log(document.getElementById('task-title').id);
//console.log(document.getElementById('task-title').className);

///////////////////////////////////////////       Change styling    ////////////////////////////////////////////////////////

document.getElementById('task-title').style.background = '#333';              // html inline style // no css
document.getElementById('task-title').style.color = '#ff0000'; 
document.getElementById('task-title').style.padding = '5px';
//document.getElementById('task-title').style.display = 'none';  
const tasktTitle = document.getElementById('task-title');

tasktTitle.style.color = '#00ff00'; 

//////////////////////////////////////////       Change the Content        /////////////////////////////////////////////

tasktTitle.textContent = 'Task List';
tasktTitle.innerText = 'Saf1 Task';  //creates a String
tasktTitle.innerHTML = '<span style="color:red" >Task List</span>'      // only works with innerHTML // creates elements // replaces innerHTML of the element // innerText / textContent inputs the text as it is // Creates a Object

//document.querySelector();
console.log(document.querySelector('.collection-item'));       // # for getElementbyId  // . for classes  // or element e.g.(div) //only selects the first element of the html
console.log(document.querySelector('li'));
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';                // html nested adress
document.querySelector('ul li:last-child').style.color = 'green';       
document.querySelector('ul li:nth-child(3)').style.color = 'yellow'; 
document.querySelector('ul li:nth-child(3)').textContent = 'Hello World'; 
document.querySelector('ul li:nth-child(odd)').style.background = '#ccc';
document.querySelector('ul li:nth-child(even)').style.background = '#0ffff0';