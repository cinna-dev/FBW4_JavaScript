const lis = document.querySelector('.collection').children;
Array.from(lis).forEach(function(item){
    item.firstElementChild.addEventListener('click',removeLi)
})
function removeLi(event){
        console.log(event.target);//target wil be not necessary the anchor but whatever is clickable inside the anchor 
        event.target.parentElement.parentElement.remove();
        //event.target.parentElement.parentElement.style.display = 'none';
        event.preventDefault();
    }
