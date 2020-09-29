// Create Element
const li = document.createElement('li');

//Add Class
li.className = 'collection-item'

//Add id
li.id = 'New-item';

//Add attributes
li.setAttribute('title','New Item') // 1st key of Attribute // 2nd value of Attribute

//Create text Node and append to 
li.appendChild(document.createTextNode('Hello World'));

//Create new link Element
const link = document.createElement('a');

// Add Classes
link.className = 'delete-item secondary-content';

// Add Icon
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link
li.appendChild(link);

// Append(+=) li as child ul

document.querySelector('ul.collection').appendChild(li);
//document.querySelector('ul.collection').prepend(li);
console.log(li);

//////////////////////////////// Exercise  ///////////////////////////////////////////////
    
const arrayOfTasks = ['eat','swim','run','walk','read']
for(i=0;i<arrayOfTasks.length;i++){
    let value = document.createElement('li')
    value.appendChild(document.createTextNode(`${arrayOfTasks[i]}`));
    value.className = 'collection-item';
    let link2 = document.createElement('a');
    link2.className = 'delete-item secondary-content';
    link2.innerHTML =  ' <i class="fa fa-remove"></i>';
    value.appendChild(link2);
    document.querySelector('ul.collection').appendChild(value);
}
// reference type