const btnTry = document.getElementById('try')
btnTry.addEventListener('click',focusMethod);




let i = 0

const textareas = document.querySelectorAll('textarea') 
let item = textareas[0];
function focusMethod(){ 
    item.classList.remove('bg-warning')
    item = textareas[i]
    item.classList.add('bg-warning')
    textareas[i].focus()
    i = (i==textareas.length-1? 0 : i+1)
    } 











//////////////// with loop //////////////////
/* function focusMethod(){
const textareas = document.querySelectorAll('textarea') 
    textareas.forEach(function(item){
        item.classList.remove('bg-warning')
    })
    textareas[i].classList.add('bg-warning')
    textareas[i].focus()
    i = (i>1? 0 : i+1)
}  */




