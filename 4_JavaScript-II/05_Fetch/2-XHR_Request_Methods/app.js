document.getElementById('button').addEventListener('click', loadData)

//Event Handler
function loadData() {
    //Create XHR Request Object
    const xhr = new XMLHttpRequest();   //XHR

    //OPEN
    xhr.open('GET', 'data.txt', true) // 'GET' = predefined //Server-Verbs , address , async=boolean


    //onload method

    xhr.onload = function () { // onload = Event // function = Event Handler
        
        //console.log('READYSTATE :', xhr.readyState)
        //console.log(this.responseText)
        console.log('The HTTP Status', this.status)
        // HTTP Satuses
        // 200: "OK"
        // 403: "Forbidden"
        // 404: "Not Found"
        if (this.status === 200) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    xhr.onprogress = function () {
        //console.log('READYSTATE :', xhr.readyState)
        // readyStates Values
        // 0: request not initialized
        // 1: server connection established
        // 2: request received
        // 3: processing request
        // 4: request finished and response is ready
    }

    xhr.onreadystatechange = function () {
        console.log('READYSTATE :', xhr.readyState)
        if(this.status == 200 && this.readyState == 4){
            console.log(this.responseText)
        }
    }

    xhr.onerror = function () {
        console.log('Request error ...')
    }

    xhr.send()
}