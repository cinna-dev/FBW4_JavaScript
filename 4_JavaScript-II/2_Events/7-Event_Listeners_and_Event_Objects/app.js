/* document.querySelector('.clear-tasks').addEventListener('click',function(event){
    console.log('hello');

    event.preventDefault(); // prevent the default refresh
})
 */

 document.querySelector('.clear-tasks').addEventListener('click',myFunction)//same event but function is defined outside of the Eventlistener. myFunction will be run automaticly if () set after it

function myFunction(event){
    //console.log('clicked')
    let val;
    val = event;

    //Event target element

    //val = event.target; // targeted Element of the EventListener 
    //val = event.target.id;
    //val = event.target.className;
    //val = event.target.classList;
    //event.preventDefault()
    //event.target.classList.remove('black')
    //event.target.classList.add('red')

    //  EVENT TYPE    
    val = event.type

    //  TIMESTAMP
    val = event.timeStamp   // return milsec since 0 UTC

    //COORD EVENT RELATIVE TO THE WINDOW
    val = event.clientY  // click position px in Browser Window Y-axes

    val = event.clientX // click position px in Browser Window X-axes

    // COORDS EVENT RELAVTIVE TO THE ELEMENT
    val = event.offsetY 

    val = event.offsetX 
    console.log(val)
}
 


/////////////////// Exersice /////////////////////////
document.querySelector('.clear-tasks').addEventListener('click',function(event){
    event.preventDefault()
    event.target.classList.remove('black') 
    event.target.classList.add('red')
})