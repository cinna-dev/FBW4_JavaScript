const btnTry = document.getElementById('try');
btnTry.addEventListener('click',myFunction);

function myFunction(){
    let span = document.getElementById('mySpan')
    let div = document.getElementById('myDiv').contains(span)
    document.getElementById('demo').innerHTML = div;
}