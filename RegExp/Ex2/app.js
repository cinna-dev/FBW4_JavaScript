let re ;   
re = /hello/;       // Literal characters
re = /hello/i;      //
re = /hello/g;      // doesn't ends when it matches for the first time.

//Metacharaceer Symbols
re = /^h/i; //caret Symbol     // ^ = String must start with
re = /d$/i;                    // $ = String Must end with
re = /world$/i;                // $ = String Must end with word
re = /^hello$/i;               // Must start and end with (includes only this word)
re = /h...o/i;                 // . = placeholder (can be any character)
re = /h*lo/i;                  //   equal to {0,} min 0 max unlimited
re = /ha?e?llo/i;              // x?y? = searches for an aditonal character (y) in place of the original (x) or no character (missing) at all
re = /\?hello/i;               // escape character


//Brackets [] = Character Sets
re = /h[ea]llo/i;              // [xy] = similar to x?y? .Character must be eather x or y no missing character allowed 
re = /h[^ea]llo/i;             // [^xy] = Match any Characters but xy
re = /h[A-Z]llo/;              // [x-y] = Match any Character between x and y   // only Capital if no i
re = /h[a-z]llo/;              // only lowercase if no i
re = /h[A-Za-z]llo/;           // both lowercase and capital letters         //  works also with umlaute
re = /[0-9]ello/;              // Match any digits between 0-9
re = /[0-9][0-9]ello/;         // Two digits after each other

//Braces {} - Quantifiers
re = /Hel{2}o/i;              // Must Occure exactly {m} at this positon m times.
re = /Hel{2,5}o/i;            // Must occure atleast 2 times maximum 5 times this positon {min, max}
re = /Hel{2,}/i;              // Min 2 Max unlimited.

//Parentheses () - Grouping
re = /([0-9]x){3}/             // the Group [0-9]x repeating 3 times.

// Shorthand Character Classes
re = /\w/;                     // Alphanumeric = any letter any digit an _  also caseinsesitve. equal to [A-Za-z0-9_]
re = /\w+/;                    // + means atleast one time max unlimited. Equivalent to {1,}
re = /\W/;                     // none Alphanumeric Characters.
re = /\d/;                     // any digit /d === [0-9].
re = /\D/;                     // any non Digit
re = /\s/;                     // whitespace Character
re = /\S/;                     // Non whitespace Character
re = /\bHell\b/i;              // word boundary = search for this exact word it is bounded in - non word character after it

//Assertions
re = /x(?=y)/i;                // match x only if followed by y
re = /x(?!y)/i;                // x but not followed by y


//String to match
const str = 'Hello';

//Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else{
        console.log(`${str} does not match ${re.source}`);
    }
}

reTest(re, str);







//free code camp
// Setup
/* var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if(prop != "tracks" && value != ""){
    collection[id][prop]=value;
  }
  else if(prop == "tracks" && !collection[id]["tracks"]){
    collection[id][prop] = [];
    collection[id][prop].push(value);
  }else if(prop == "tracks" && value != ""){
    collection[id][prop].push(value);
  }else if(value == ""){
    delete collection[id][prop];
  }
  
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
 */