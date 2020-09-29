// onEvent (= any Event Type) = some javascript code

const Bulb = document.getElementById('myImage');
 
Bulb.onmousedown = lightOnOff; //on Event  // its like adding an eventListener
Bulb.onmouseup = lightOnOff;

/* function lightoff(){
    Bulb.src = 'bulboff.gif'
}

function lighton(){
    Bulb.src = 'bulbon.gif'
}  */






Bulb.onmouseover = lightOnOff; 
Bulb.onmouseout = lightOnOff;

function lightOnOff(e){
    console.log(e.type)
    if(e.type == 'mousedown' ||e.type == 'mouseover' ){
        this.setAttribute('src','bulbon.gif')
    }else{
        this.setAttribute('src','bulboff.gif')
    }
}





const textArea = document.createElement('textarea')
const div = editableDiv;
div.onmousedown = function(){
    textArea.style.width = this.clientWidth + 'px';
    textArea.style.height = this.clientHeight + 'px';
    textArea.onkeydown = stoppEdit;
    textArea.onblur = stoppEdit;
    this.replaceWith(textArea);
}
function stoppEdit(e){
    if(e.type == 'blur' || e.key == 'Shift' ){
        div.innerHTML = this.value; 
        this.replaceWith(div);
    }
}
       