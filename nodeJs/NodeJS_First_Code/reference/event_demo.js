const EventEmitter = require('events');

//create Class

// extending a class is like making a copy of it
class MyEmitter extends EventEmitter {}

//Init object instance
const myEmitter = new MyEmitter();

//Event Listender
//THE EVENT LISTNER NEEDS TO BE SEPERATED TO HAVE IT IN DIFFERENT PLACES WITH OTHER CALLBACKS
myEmitter.on('event', () => console.log('Event fired !!!'))

//Init event

myEmitter.emit('event')