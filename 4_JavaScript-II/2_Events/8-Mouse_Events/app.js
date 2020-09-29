const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');


// Click
//clearBtn.addEventListener('click',runEvent)

//Double Click
//clearBtn.addEventListener('dblclick',runEvent)

//Mouse Down
//clearBtn.addEventListener('mousedown',runEvent)  // on hold down

//Mouse Up
//clearBtn.addEventListener('mouseup',runEvent)       // on release

//Mouse Enter
//card.addEventListener('mouseenter',runEvent)  

//Mouse Leave
//card.addEventListener('mouseleave',runEvent) 

//Mouse Over
//card.addEventListener('mouseover',runEvent) // register any element of the parent the mouse is going over 

//Mouse Out
//card.addEventListener('mouseout',runEvent) // similar to mouseOver but only registering when leaving an element

//Mouse Move
card.addEventListener('mousemove',runEvent) // triggered while moving every tick // no pixelcount // counts new for each child element 

// "Event Handler" : function that is passed to the Eventlistener

// Event Handler
function runEvent(e){
    //e.preventDefault()
    console.log(`Event Type : ${e.type}`)  // type of Event
    heading.textContent = `MouseX:${e.offsetX} MouseY:${e.offsetY}`

    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},128)`
}
