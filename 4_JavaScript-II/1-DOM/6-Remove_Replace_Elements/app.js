// REPLACE ELEMENTS
//create Element
const newHeading = document.createElement('h2');
//Add id
newHeading.id = 'task-title';
//New text node
newHeading.appendChild(document.createTextNode('Easy Peasy')) // don't use innerText or textContent // textNode is an Object // textContent is a String

//const li = document.querySelector('li')
//li.textContent += 'sdfaff' // will append but delet all other nodes.
//li.appendChild(document.createTextNode('sdfaff')) // proper way of doing it

//Get the old heading
const oldHeading = document.getElementById('task-title');

const cardAction = document.querySelector('.card-action');

//Replace

cardAction.replaceChild(newHeading,oldHeading) // replaced oldHeading with newHeading inside cardAction
//oldHeading.replaceWith(newHeading)



//Replace Text Node
const li = document.querySelector('li');
const newChild = document.createTextNode('new child');
const oldChild = li.firstChild;
li.replaceChild(newChild,oldChild);  
//oldChild.replaceWith(newChild);

//Remove Element
let lis = document.querySelectorAll('li'); //NodeList but it will be only li elements obviously.
const list = document.querySelector('ul');
//Remove List Node

//lis[0].remove();
lis = document.querySelectorAll('li')  //has to be assigned again to be updated 
//lis[0].remove(); // otherwise this will not work again;

//Remove Child Element
list.removeChild(lis[1])


//CLASSES & ATTRIBUTES
const firstLi = document.querySelector('li:first-Child');

const link = firstLi.children[0];

let val;

//CLASSES
val = link.className;
val = link.classList; //DOMTokenList
val = link.classList[0];  //fist class token
link.classList.add('test')  // add className
link.classList.remove('test') 
val = link;

//ATTRIBUTES

val = link.getAttribute('href')  // will return the attribute href

link.setAttribute('href','http://google.com')// attribute: key , value

link.setAttribute('title', 'DCI');  // Set not yet existing attribute with key and value 
val = link.getAttribute('title') // if return null it has not this attribute
val = link.removeAttribute('title') // removes this attribute
val = link.hasAttribute('title') // same but boolean

console.log(val)


////////////////// Exersice ////////////////

//Replace li's textNodes
const text = ['eat','walk','jump','Done','sleep'] 
text.forEach(function(item,i){
    lis[i].replaceChild(document.createTextNode(`${item}`),lis[i].firstChild)
})

//////////////remove li with a 'Done' textNode ////////////////
 

Array.from(lis).forEach(function(item){
if(item.textContent.includes('Done')){
    //item.remove()
    } 
})

////////////// set href if textNode is Done ////////////////
Array.from(lis).forEach(function(item){
    if(item.textContent.includes('Done')){
        item.firstElementChild.setAttribute('href','https://digitalcareerinstitute.org/')
        //item.firstElementChild.href ='https://digitalcareerinstitute.org/'
        } 
    })
