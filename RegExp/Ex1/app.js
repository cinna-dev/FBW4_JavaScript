let re;
re = /hello/;
re = /hello/i; // i = case insensitive modifier
// re = /hello/g;  // g = global search modifier

// console.log(re);
// console.log(re.source); // shows pattern only

// exec
// exec() - return result in an array or null // regular expression function
//const result = re.exec('hello world');
//console.log(result); // return in an array or null
//console.log(result[0]); //return the matched pattern
//console.log(result.index); //return the index where the pattern started from
//console.log(result.input); // return the input we tested with the pattern
//console.log(result.groups); // return groups


// test
// test() - returns true or false  // regular expression function
//const result = re.test('Hello');
//console.log(result);

// match   
// match() // returns the result array or null  // allternitive to exec // string function
//const str = 'Hello There';
//const result = str.match(re);
//console.log(result);


// search
// search() // returns index of the first match, if not found it returns -1  // string function
//const str = 'Hello There';
//const result = str.search(re);
//console.log(result);



//replace
//replace() // returns new string where the pattern is replaced by a new word provided  // string function
//const str = 'Hello There';
//const result = str.replace(re, 'Hi');  //  string.replace(pattern, replacement)
//console.log(result);







/* function checkforPattern(str, re){
if(re.test(str)){
     return `it matched`  
    }  
return `it didn't match`
}

let string = 'hello world';
let regularExpression = /world/i ;
document.write(checkforPattern(string, regularExpression)); */


function replaceTime(str, re, replace){
if(re.test(str)){
    return `${str}.<br> ${str.replace(re, replace) }`;
   }  
return `The Time could not be changed`
}

let string = 'The Time is: 9:05';
let regularExpression = /9:05/i;
let replacement = '9:10';
document.write(replaceTime(string, regularExpression, replacement));