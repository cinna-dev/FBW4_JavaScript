document.querySelector('.card-action').addEventListener('click', function(e){
   if(e.target.closest('li')){
    Array.from(e.target.parentElement.children).forEach(function(item){
        item.style.backgroundColor = (item == e.target ?'yellow': "");
    })  
   }else if(e.target.closest('.card-action')){
        //console.log(e.target.children[1])
       Array.from(e.target.children[1].children).forEach(function(item){
          item.style.backgroundColor = 'red';        
})
       }
   })
   console.log(document.querySelector('.card-action'))