// easyHTTP constructor
function easyHTTP() {
    this.http = new XMLHttpRequest()
}


// Make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true)
    this.http.onload = () => {
        // doesnt work with a standart function // before "this" would refere to the "function" // with arrow functon it will now refere to "easyHTTP" 
        if (this.http.status === 200) { // could get response 200 but has no actual text
            callback(null, this.http.responseText);
            //callback referece to function(items){console.log(items)}) in app.js
        } else {
            callback(`Page Not Found : ${this.http.status}`);
        }
    }
    /// Alternative ///

    // for normal function define "that" var as "this" // can now be use inside function
    /* let that = this;
    this.http.onload = function () { 
        if (that.http.status === 200) {
            return that.http.responseText;
        }
    } */

    this.http.send();
}

// Make an HTTP POST Request
easyHTTP.prototype.post = function (url, data, action) {
    this.http.open('POST', url, true)
    this.http.setRequestHeader('Content-type', 'application/json')
    this.http.onload = () => {
        if (this.http.status === 201) { //success Code for "POST" is 201 // 200 for "GET"
            action(null, this.http.responseText)
        } else {
            action(`Page Not Found : ${this.http.status}`);
        }
    }
    this.http.send(JSON.stringify(data));
}
// Make an HTTP PUT Request
easyHTTP.prototype.put = function (ulr, data, action) {
    this.http.open('PUT', ulr, true)
    this.http.setRequestHeader('Content-type', 'application/json')
    this.http.onload = () => {
        if (this.http.status === 200) { // 200 for "PUT"
            action(null, this.http.responseText)
        } else {
            action(`Page Not Found : ${this.http.status}`);
        }
    }
    this.http.send(JSON.stringify(data))
}
// Make an HTTP DELETE Request

easyHTTP.prototype.delete = function (ulr, action) {
    this.http.open('DELETE', ulr, true)
    this.http.setRequestHeader('Content-type', 'application/json')
    this.http.onload = () => {
        if (this.http.status === 200) { // 200 for "PUT"
            action(null,'Post Deleted')
        } else {
            action(`Failed to delete : ${this.http.status}`);
        }
    }
    this.http.send()
}



/* 
arr = [1,2,3]
arr.forEach(function(item){
    console.log(this)
})
arr.forEach(item =>{
    console.log(this)
}) */