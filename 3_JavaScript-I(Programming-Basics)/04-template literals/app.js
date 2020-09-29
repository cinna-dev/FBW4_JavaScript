const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Hamburg';
let html;

//Without template strings (ES5) //ECMAScript
html = '<ul><li>Name: '+name+'</li><li>Age: '+age+'</li><li>Job: '+job+'</li><li>City: '+city+'</li></ul>';


//function for demonstration purpose below
function getCity(){
    return 'New York'
}
//With template literales (ES6)
html = `<ul>
            <li>Name: ${name}</li>
            <li>Age: ${age}</li>
            <li>Job: ${job}</li>
            <li>City: ${getCity()}</li>
            <li>${1+14}</li>
            <li>${age>30 ? 'Over 30':'Under 30'}</li>   
        </ul>`
//if statement// condition ? // true case : false case
//implementation
document.body.innerHTML = html ;