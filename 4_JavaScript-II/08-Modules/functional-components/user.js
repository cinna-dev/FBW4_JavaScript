//Example1
/* let greeting = "welcome back"

function hi(user) {
    return `${greeting} ${user} in JavaScript Module`
}

//add export before decleration

export {hi} */


//Example2
/* export function sqr(num){
    return num*num
} */

//Example3
export  default function sqr(num){      // export the function but lets you redefine the name // works only for one export
    return num*num
}

//Example4
export {makeElement}

function makeElement(tagName, text, background){
    let el = document.createElement(tagName);
    el.append(text)
    el.style.background = background;
    el.style.color = '#fff'
    el.style.height = '100px'
    document.body.append(el)
}

