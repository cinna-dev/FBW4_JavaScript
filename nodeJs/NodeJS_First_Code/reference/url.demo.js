/* //Legacy Methode
const url = require('url') // get the
//Parsing the URL string using  Legaxy API
const myUrl = url.parse('http://mywebsite.com:5000/hello.html?id-100&status=active&class=fbw4')
console.log(myUrl); */
// the URL class is also memeber of the global Object

// using the WHATWG
//WHATWG // wep hypertext application Tech working group
const URL = require('url').URL //the URL class is also a member of the Global Object

const myUrl = new URL('http://user:pass@mywebsite.com:5000/hello.html?id=100&status=active#hash')
//Protocol //pass  //Host    //Port //pathname//search query
//https must be bought

//Serialized URL
/* console.log(myUrl.toString())
console.log(myUrl)
console.log(myUrl.href) */

//Host (root domain)
console.log(myUrl.hostname);
//hostname
myUrl.hostname = 'jay.com';
//username: 
myUrl.username = 'admin';
//password
myUrl.password = '4fx$2yut';
console.log(myUrl);

//Param Object
console.log(myUrl.searchParams);
console.log(myUrl.search)

//Loop through params
let counter = 101

myUrl.searchParams.forEach((value, key) => {
    if (key === 'id') {
        value = `${counter++}`
    } else {
        value = 'inactive'
    }

})

myUrl.search = '?id=101&status=inactive'

console.log(myUrl.searchParams)