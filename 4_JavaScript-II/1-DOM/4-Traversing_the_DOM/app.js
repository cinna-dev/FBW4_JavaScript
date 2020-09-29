let val;

const list = document.querySelector('ul.collection')         // selects all ul with the class collection

const listItem = document.querySelector('li.collection-item:first-child') //by default takes the first in HTML// last child or nth-child will work as well // selects exactly the element

val = list;
val = listItem;
val = list.childNodes;                      //'NodeList' will show spaces between 'elements' inside the 'HTML as 'indexes' with 'Text'   // Not an array but can be used with array functions.
val = list.childNodes[0];           // when selecting 'Text it will wright '#Text'
val = list.childNodes[1].nodeName;   // will just show the name of the node. not an object anymore
val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype



//Get Children Element Nodes

val = list.children;                           //HTML Collection   // children will return a HTMLCollection with onle the elements of the parent
val = list.children[0].className;            // className of element

// Children of Children
        
list.children[0].children[0].id = 'test-link';        // asigning an id to grand=child of selected element

val = list.children[0].children[0].children[0]          //  grand-grand-child   traversing DOM   //  

// First Child
val = list.firstChild;                      // returns first Node of parent //form NodeList

val = list.firstElementChild;               // returns first Element of parent
                     
// Last Child
val = list.lastChild;
val = list.lastElementChild;

    //list.lastElementChild.innerText += ' last child of ul'                           

// Count Child Elements

val = list.childElementCount                // number of children

// Get Parent Node

val = listItem.parentNode;                  // selects node of parent of selected item
val = listItem.parentElement;               // selects parent element of selected item
val = listItem.parentElement.parentElement  // grand-parent 


// Get next Sibling

val = listItem.nextSibling;                     // returns the next Child Node of Parent
val = listItem.nextElementSibling;              // returns the next Child Element of Parent
val = listItem.nextElementSibling.nextSibling;  // going further 

// Get previous Sibling

val = listItem.previousSibling                  // will be the first node if there is no spezific node selected
val = listItem.previousElementSibling          // will be 'null' if there is no spezific element selected // previous to index [0] :null

console.log(listItem.parentElement)
/////////////////////////////////////////////   Exercise3   ////////////////////////////////////////////////////////

list.children[3].innerText = 'Hello';

Array.from(listItem.parentElement.children).forEach(function(item, index){
    if(item.innerText == 'Hello' && index >0 && index < listItem.parentElement.children.length-1){
        item.nextElementSibling.style.background = 'blue';
        item.previousElementSibling.style.background = 'blue';
    }
})

/////////////////////////////////////////////   Exercise2   ////////////////////////////////////////////////////////
/* list.children[1].style.color = 'red';list.children[3].style.color = 'red';

let countEven = [];
let countOdd = [];
Array.from(list.children).forEach(function(item, index){
    if(item.style.color.includes('red')&& index%2 !=0){
        item.innerText = 'DONE!!!';
        countOdd.push(item);
    }else if(item.style.color.includes('red')&& index%2 ==0){
        item.innerText = 'DONE!!!';
        countEven.push(item);
    }
    else{item.innerText = 'not done';}
})

console.log(`even: ${countEven.length},odd: ${countOdd.length}`) */

/////////////////////////////////////////////   Exercise   ////////////////////////////////////////////////////////

//console.log(val)

/* console.log(list.childNodes)
let val2 = Array.from(list.childNodes);
console.log(val2); */



/* let x =  val2[1].innerText;
for(i=0;i<val2.length;i++){
    if(val2[i].innerText == 'Text'){
        val2[i].style.background = 'red'
    }//else{val2[i].style.background = 'blue'}
} */




// doesnt work with 'textContent'




/* (function(){
val2.forEach(function(item){
    if(item.innerText == 'Hello'){
        item.style.background = 'blue';
    }//else{item.style.background = 'red';} 
})
})() */


