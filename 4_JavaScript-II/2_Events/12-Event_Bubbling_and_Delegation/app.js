// Event Bubbling
let sPan = document.querySelector('.card-title');

let div = document.querySelector('.card-content');

let sDiv = document.querySelector('.card')

let lDiv = document.querySelector('.col')
console.log(sPan);
console.log(div);
console.log(sDiv);
console.log(lDiv);
document.querySelector('.card-title').addEventListener('click', function(){
    console.log('child');
})

document.querySelector('.card-content').addEventListener('click', function(){
    console.log('parent');
})
document.querySelector('.card').addEventListener('click', function(){
    console.log('grand parent');
})
document.querySelector('.col').addEventListener('click', function(){
    console.log('great grand parent');
})