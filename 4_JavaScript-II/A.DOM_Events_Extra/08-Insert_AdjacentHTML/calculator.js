const num1 = 6;
const num2 = 4;

const btnTry = document.querySelector('#try');

btnTry.addEventListener('click',myFunction)

function myFunction(){  //Event Handler
    const input1 = document.getElementById('input1').value
    const input2 = document.getElementById('input2').value
    const select = document.getElementById('select').value
    let str = `${input1+select+input2}`
    let output = document.getElementById('output')
    output.innerHTML='';
    output.insertAdjacentHTML("afterbegin",`${eval(str)}`) //"beforebegin" predefined //eval(string) is uing a mathematical operation as a string and calculating 
}

//parInt() translate from string to number
//console.log(eval(str))