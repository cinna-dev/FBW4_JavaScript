const firstName = 'Safwan';
const lastName = 'kher Allah';
const age = 32;
const str = 'Hello there my name is Safwan';
const tages = 'web design, web development, programming';

let val;

val = firstName + lastName;

//Concatination
val = firstName + ' ' + lastName;
//Appened
val = 'Safwan ';
val+='Kher Allah'

val = 'Hello, My name is '+firstName + 'and I am ' + age + ' years old' 

//Escaping
val = 'That\'s awesome, I can\'t wait'

//length
val = firstName.length

//Concat()
val = firstName.concat(' ',lastName)

//Change Case
val = firstName.toLocaleLowerCase(); 
val = lastName.toLocaleUpperCase();

val = lastName[2];

//IndexOf()
val = firstName.indexOf('a');
val = firstName.lastIndexOf('a');

//charAt()
val = firstName.charAt(4);    // outputs character at index 4
val = firstName[4];

//Get last char
val = firstName.charAt();
(firstName.langth-1)
val = firstName[firstName.length-1]; 

//Substring()
val = str.substring(0,4);

//slice()
val = str.slice(0,4);      //(startingIndex,EndIndex)
val = firstName.slice(-3);   // is starting from the last 3 charakters

//split()
val = str.split(' ')

//replace
val = str.replace('Safwan','Saf1')

//includes()
val = str.includes('Saf');

console.log(val);