myInput.onkeydown = keyOutput;
myInput.onkeyup = keyOutput;
let line = new Array(50).join('-')+'\n';
function keyOutput(e){
    if(keydownDefault.checked){
        e.preventDefault()// prventDefault // prevents to do what ever the key usually does // input still registered though.
    }else if(keyupDefault.checked){
        e.preventDefault()
    }
    if(e.type == 'keydown' && !keydownIgnore.checked){
    mytexArea.value += `${e.type} Key=${e.key} Code=${e.code} ${(e.shiftKey? 'ShiftKey': e.ctrlKey? 'CTRLKey': e.altKey? 'AltLKey': e.repeat? 'Repeat': '')} \n`;
    }else if(e.type == 'keyup' && !keyupIgnore.checked){
    mytexArea.value += `${e.type} Key=${e.key} Code=${e.code} ${(e.shiftKey? 'ShiftKey': e.ctrlKey? 'CTRLKey': e.altKey? 'AltLKey': e.repeat? 'Repeat': '')} \n`; 
    mytexArea.value += line;
    }
}
Clear.onclick = function(){
    mytexArea.value = '';
    myInput.value = '';
}




