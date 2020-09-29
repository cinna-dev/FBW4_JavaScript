mouse.tabIndex = 0; // mandetory for the pseudoSelector :focus
mouse.onclick = function(){
    // getBoundingClientRect() left does not positio on the element but just correct the style.left
    this.style.left = this.getBoundingClientRect().left + 'px';  //read only = also dynamic?
    this.style.top = this.getBoundingClientRect().top + 'px';

    this.style.position = 'fixed';
}

mouse.onkeydown = function(e){
    switch(e.key){
        case 'ArrowLeft':
            this.style.left = (parseInt(this.style.left) - this.offsetWidth > 0? parseInt(this.style.left) - this.offsetWidth + 'px': this.style.left); // if new style.left > 0 asign subtraction else asign current style.left
            return false;
        case 'ArrowRight':
            this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
            return false;
        case 'ArrowUp':
            this.style.top = (parseInt(this.style.top) - this.offsetHeight >  0? parseInt(this.style.top) - this.offsetHeight + 'px': this.style.top);
            return false;
        case 'ArrowDown':
            this.style.top = parseInt(this.style.top) + this.offsetHeight  + 'px';
            return false; 
    }
}
mouse.onblur = function(e){
    this.style.left = undefined;
    this.style.top = undefined;
    this.style.position = 'static';
}