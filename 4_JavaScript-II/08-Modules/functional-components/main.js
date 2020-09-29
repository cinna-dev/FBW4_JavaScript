//Example1
/* import {hi} from "./user.js"; //greeting will be part of hi
console.log(hi("fw4")) */


//Example2
/* import {sqr} from "./user.js";  // import directly the function
console.log(sqr(3)) */


//Example3
/* import square from "./user.js";  // import "square" and renames it to "sqr";
console.log(square(3)) */

import square, { makeElement } from "./user.js"

makeElement('h3', 'hello', 'red')