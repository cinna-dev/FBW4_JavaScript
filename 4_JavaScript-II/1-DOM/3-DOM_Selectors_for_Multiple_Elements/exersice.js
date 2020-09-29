
let val = document.getElementsByTagName('li');
val =document.querySelector('ul').getElementsByTagName('li')
for(i=0;i<val.length;i++){
    if(i%2==0){
        val[i].textContent = 'blub';
        val[i].style.color = 'red';
    }else{
        val[i].textContent = 'blobb'; 
        val[i].style.color = 'blue';
    }
}
console.log(val);