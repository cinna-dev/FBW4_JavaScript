

// easyHTTP constructor
function easyHTTP() {
    this.http = new XMLHttpRequest()
}


// Make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true)
    this.http.onload = () => {
        // doesnt work with a standart function // before "this" would refere to the "function" // with arrow functon it will now it refere to "easyHTTP" 
        if (this.http.status === 200) { // could get response 200 but has no actual text
            callback(null, this.http.responseText)
            //callback referece to function(items){console.log(items)}) in app.js
        } else {
            callback( `Page Not Found : ${this.http.status}`)
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

    this.http.send()
}

// Make an HTTP POST Request
// Make an HTTP PUT Request
// Make an HTTP DELETE Request




/* 
arr = [1,2,3]
arr.forEach(function(item){
    console.log(this)
})
arr.forEach(item =>{
    console.log(this)
}) */