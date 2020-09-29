const button = document.body.appendChild(document.createElement('button'));
const h2 = document.body.appendChild(document.createElement('h2'));
button.appendChild(document.createTextNode('click here'));
button.addEventListener('click', function(event){
   if(h2.textContent){
      h2.firstChild.remove()
   }else{
   h2.appendChild(document.createTextNode('This is an Test'))
   }
}) 