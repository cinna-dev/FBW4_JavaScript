const lis = document.querySelector('.collection').children;
Array.from(lis).forEach(function(item){
    item.addEventListener('click',colorLi)
    item.addEventListener('dblclick',colorLi)
})
function colorLi(event){
    console.log(event.type)
    if(event.type == 'click'){
         Array.from(lis).forEach(function(item){
            item.style.backgroundColor = '';
        })
        event.target.style.backgroundColor= 'green';
    }else if(event.type == 'dblclick' && event.target.style.backgroundColor){
        event.target.style.backgroundColor= '';  
    }    
}
