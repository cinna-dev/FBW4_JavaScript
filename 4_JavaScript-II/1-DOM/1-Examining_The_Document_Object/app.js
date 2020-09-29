let val;
val = document;    //html document
val = document.all;  // content of the html document as an array
val = document.all.length;
val = document.all[2];
val = document.head;
val = document.body;
val = document.doctype;     //doctype of html
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;    //contentType of document
val = document.forms;          //content of element "form"
val = document.forms[0];       // 1st index of "form" array
val = document.forms[0].id;    // addribute-id that is applied to the first "form" element in document
val = document.forms[0].method;  // method contained in "forms" object
val = document.forms[0].action;   // returns the attribute action of the first form element as an object

val = document.links;
val = document.links[0];
val = document.links[0].id = 'Jack';   // assign 'jack to id // id is not in the html
val = document.links[0].className;     // returns classes of element
val = document.links[0].classList;     // retruns array of classes
val = document.links[0].classList[1];  

val = document.images;

val = document.scripts;  // not an array // its an literal object // HTML Collection
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;
let scriptsArray = Array.from(scripts)  
console.log(typeof scripts);
scriptsArray.forEach(function(item){
    console.log(item.getAttribute('src'))
});

console.log(val);
console.log(typeof val);