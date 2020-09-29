document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getApi);

console.log(window.fetch)
//Get local text file data
function getText() {
    fetch('local.text') //linebreak witch dot notation
        .then(function (res) {
            //console.log(res.text()) // with json res.json()
            return res.text() // is also a Promise Instance
        })
        .then(function (data) { //  Chain Promises  //  nested Promises?    //2nd then() activated when return of the first then() has been done
            console.log(data)
            document.getElementById('output').innerHTML = data;
        })
        // The PromiseSatus will stay "resolved" even if there is an Error because we are getting from Local DATA File, only SERVER can change automatically the PromiseStatus innto "rejected" when there is an Error
        .catch(function (problem) {
            console.log(problem)
        })
}


/// Get local JSON file data ///
////////////////////////////////
function getJson() {
    fetch('local.json')
        .then(function (res) {
            //console.log(res.json())
            return res.json()
        })
        .then(function (data) {
            console.log(data) // data will be allready be JSON.parse()
            //data = JSON.parse(data)
            let output = ''
            for (element of data) {
                output += `
                <li>${element.title}</li>
                <li>${element.body}</li>`
            }
            document.getElementById('output').innerHTML = output;
        })
        .catch(function (problem) {
            console.log(problem)
        })
}

/// Get data from API ///
/////////////////////////
function getApi() {
    fetch('https://api.github.com/users')
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
            let output = ''
            //all Data
            /*  for (element of data) {  
                 for (key in element) {
                     output += `
                 <li>${key} : ${element[key]}</li>`
                 }
             } */
            for (element of data) {
                output += `
                <li>${element.login}</li>`
            }
            document.getElementById('output').innerHTML = output;
        })
        //only Server can change the PromiseStatus
        .catch(function (problem) {
            console.log(problem)
            document.getElementById('output').innerHTML = problem;
        })
}

//////////////////////////////////////////////////////
const obj = {
    a: 1,
    b: 2
}
obj //  example of linebreak with object dot notation
    .b = 3
console.log(obj)