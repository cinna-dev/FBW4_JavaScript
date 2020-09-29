//object consturctor // new;
let val;
//date Constructor
const today = new Date();
let birthday = new Date('03-24-1987 07:33:05') // month-day-year

    birthday = new Date('June 27 1987');

//Date GET Methods       //get = locked but callable method
val = today.getMonth();  // get the month // index beginning with 0;
val = today.getDate();  // get the day of the month
val = today.getDay();   // get the day of the week
val = today.getFullYear(); // get the full year
val = today.getHours(); // returns the hours in local time
val = today.getMinutes(); // returns the Minutes of the curent Hour in local time
val = today.getSeconds(); // returns the Seconds of the curent Minutes in local time
val = today.getMilliseconds(); // returns the Milliseconds of the curent Second in local time
val = today.getTime(); // returns Time the Milliseconds that have passed // by default from 0:00;


//Date SET Methods      // set = accessabe method
birthday.setMonth(3); // changes the birthday month
birthday.setDate(30); // changes the birthday months day
birthday.setFullYear(1991); // changes the birthdays year
birthday.setHours(1);
console.log(birthday) 
birthday.setMinutes(45);
console.log(birthday) 
birthday.setSeconds(25);
console.log(birthday);