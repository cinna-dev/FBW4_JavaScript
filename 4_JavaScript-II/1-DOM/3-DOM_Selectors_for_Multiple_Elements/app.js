// document.getElementsByClassName
const items = document.getElementsByClassName('collection-item')
//console.log(items);
//console.log(items[0]);
items[0].style.color = 'red';
items[2].textContent = 'Hello Jay';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');              //HTML Collection is an iterable object (with index Numbers)  // selects all "collection-items" insiede the first "ul"

//console.log(items);


//document.getElementsByTagName('li')

let arr = ['red','blue','black','yellow','#ccc','green'];
let arr1 = ['I','don\'t','know','what','to','wright']
let lis = document.getElementsByTagName('li');   //HTML Collection

//lis = Array.from(lis)             // can be converted to array to use Array Functions with it

for(i=0;i<lis.length;i++){
    lis[i].style.color = arr[i];
    lis[i].textContent += `i am List Item Number${i}`;
    lis[i].textContent += arr1[i];
}

//console.log(lis);

//Convert HTML Collectoin into array
lis = Array.from(lis);

lis.reverse()                 // reverse lis array
//console.log(lis)

/* for(i=0;i<lis.length;i++){
    console.log(lis[i])
} */


lis.forEach(function(item, index){               
    //console.log(item);
    item.textContent = `${index} : Hello World`;
});

lis.forEach(function(item, index){               
    item.innerHTML += `<span style='color:rgb(${Math.round(Math.random()*index)}${Math.round(Math.random()*index)}${Math.round(Math.random()*index)},${Math.round(Math.random()*index)}${Math.round(Math.random()*index)}${Math.round(Math.random()*index)},${Math.round(Math.random()*index)}${Math.round(Math.random()*index)}${Math.round(Math.random()*index)})' > I'm span Number : ${index}  </span>`;
});




//document.querySelectorAll

const items2 = document.querySelectorAll('li')    //querySelectorAll : will return a NodeList 

console.log(items2)       
 
items2.forEach(function(item, index){
    item.innerHTML +=`<a style='color:blue' href='https://developer.mozilla.org/' target='_blank' >click Me ${index}</a>`
})

console.log(Array.isArray(items2))

const liOdd = document.querySelectorAll('li:nth-child(odd)');
console.log(liOdd)
liOdd.forEach(function(li, index){
    li.style.background = '#ffbb44';
})
const liEven = document.querySelectorAll('li:nth-child(even)')

for(i=0;i<liEven.length;i++){
    liEven[i].style.background = '#44bbff';
}
