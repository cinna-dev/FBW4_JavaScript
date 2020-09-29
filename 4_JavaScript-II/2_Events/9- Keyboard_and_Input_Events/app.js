const form = document.querySelector('form');
const taskInput = document.getElementById('task'); //input
const heading = document.querySelector('h5');

const select = document.querySelector('select');
// Clear input
taskInput.value = '';

// Submit

//form.addEventListener('submit',runEvent)

// Keydown
taskInput.addEventListener('keydown',runEvent)  // first operation then asignment; so it will not notice the latest key input

// Keypress
//taskInput.addEventListener('keypress',runEvent) // keydown == keypress;// keypress lagacy // keydown new

// Focus
//taskInput.addEventListener('focus',runEvent)  // enlagring 

// Blur
//taskInput.addEventListener('blur',runEvent)

// Change
//select.addEventListener('change',runEvent) // noticed changes betwee options 

/////////// Event Listener ////////////

function runEvent(e){
    //e.preventDefault(); // prevent the default actions an element would normaly do
    //console.log(`EVENT TYPE: ${e.type} value:${e.target.value}`);   // type of event
    console.log(`Event Key: ${e.key}`)     // key pressed 
}