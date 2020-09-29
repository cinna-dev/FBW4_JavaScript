//$(function){} document ready function

// DOM Traversal

//.first()
//.last()
//.eq() // index // $('li).ep(1) //2nd li
//.children() 
//.siblings() //shows all siblings
//.parent()
//.prev() // goes up in lines
//.next() // like .prev() goes down lines
//.closest('.class') // goes up the chain untill it findes element witch ".class"
//$('parent').find('siblings') //returns all siblings inside parent
//.filter // filters through a selection of elements with typical css selectors.  // .filter(':first')  

//.addClass('string')  //.siblings().addClass('string')
//.is('.special')   // returns boolean if element has the class "special"
//.not('.special')   // returns boolean if element has not the class "special"

// example 
//find('li').filter(.special)
//.attr('rel') // searches for the element with the attribute "rel"

// most jQuery function allow a callback as argument. Callback will be executed after the function is done

// it is good practice to put an $ infront of variables that contain an jQuery selected element // is a jQuery Object