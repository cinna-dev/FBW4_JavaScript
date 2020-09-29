/**                //advanced comment
 *EasyHTTP library
 *Library for making HTTP requests 
 *
 * @version 1.0.0
 * @author FbW4
 * @license 
 *
 **/

class EasyHTTP {
    //Make an HTTP "GET" Request
    get(url) {
        return new Promise((resolve, reject) => { // will return an instance that is either "resolved" or "rejected"
            fetch(url) //Promise<Response> // Promise(OK,err)   
                .then(res => res.json()) //Promise<Response> // // returns "data"
                .then(data => resolve(data))//Promise(OK,err) 
                .catch(err => reject(err)) // then() , catch() for resolved "depending States"
        })
    }
    //Make an HTTP "POST" Request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, { // Object containing the Request = "Open" , "RequestHeader" , data-content
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
    //Make an HTTP "PUT" Request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
    //Make an HTTP "DELETE" Request
    // doesnt need "DATA" input // just delets acording to the url
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'DELETE',
                    header: {
                        'Content-type': 'application/json'
                    },
                })
                .then(res => res.json())
                .then(() => resolve('Done !!!'))
                .catch(err => reject(err))
        })
    }
}