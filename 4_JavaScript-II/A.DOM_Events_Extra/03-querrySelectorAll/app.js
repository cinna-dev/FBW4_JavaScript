const elements = document.querySelectorAll('ul > li:last-child')

for(let elem of elements){  // just for iterable objects like 'nodeList' , 'HTMLCollection' , 'tokenList'
  alert(elem.innerHTML);
} 