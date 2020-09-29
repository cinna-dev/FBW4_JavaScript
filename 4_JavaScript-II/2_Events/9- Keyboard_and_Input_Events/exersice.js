//const lis = document.querySelectorAll('li');
//const select = document.querySelector('select');

/* select.addEventListener('change',changeEvent);

function changeEvent(event){
    if(event.target.firstElementChild.value == 5)
    event.target.firstElementChild.remove(); // removes Choose..
    Array.from(lis).forEach(function(item){
       item.style = '';    
    })
    Array.from(lis)[event.target.value].style = 'background-color : green ; color : white'
    
} */

const lis = document.querySelectorAll('li');
const select = document.querySelector('select');

select.addEventListener('change',changeEvent);

function changeEvent(event){
    if(event.target.firstElementChild.value == 'Choose...')
    event.target.firstElementChild.remove(); // removes Choose..
    Array.from(lis).forEach(function(item,i){
        item.style = (i == event.target.selectedIndex? 'background-color : green ; color : white': '' )   
    })
}
