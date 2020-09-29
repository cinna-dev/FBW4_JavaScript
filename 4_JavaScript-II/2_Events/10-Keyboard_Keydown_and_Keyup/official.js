kinput.onkeydown = kinput.onkeyup = handle;  // similar to  let r,t,y,z;

let lastTime = Date.now();

/* function handle(e){
    console.log(e.type)
    console.log(e.key)
    console.log(e.code)
    console.log(e.repeat)
} */

function handle(e){
   // console.log(form.elements[e.type+'Ignore'].checked) // works because of the HTMLObject // like obj['name'] // HTMLElement needs an attibute 'name' to be accessed this way // only works with .elements // will be listed as poperty of the HTML Element // HTML...ControlCollection
   if(form.elements[e.type+'Ignore'].checked) return;  // doesnt need Braces because it is just one statement // its like [keydownIgnore].checked and [keyupIgnore] //.checked 
  
   let text = e.type +   
    ' key = '+e.key +
    ' code = '+e.code +
    (e.shiftKey ? ' shiftKey' : '') + 
    (e.ctrlKey ? ' ctrlKey' : '') +
    (e.altKey ? ' altKey' : '') +
    (e.repeat ? ' (repeat)' : '') +
    '\n';// if concatination is used you can seperate with new lines.

    if(area.value &&  Date.now()-lastTime >250){
        area.value += new Array(80).join('-')+'\n' // joins '-' to each array item
    }
    lastTime = Date.now();
    //adding the text
    area.value += text; // area.value = area.vlaue = text

    if(form.elements[e.type+'Stop'].checked){
        e.preventDefault()
    }
}

// .elements // .children // similar but children is better