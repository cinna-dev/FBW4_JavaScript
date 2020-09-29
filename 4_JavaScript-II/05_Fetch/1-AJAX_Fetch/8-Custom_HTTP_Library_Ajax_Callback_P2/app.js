const http = new easyHTTP; // does not need parantethese because of the "new" constructor keyword

//Callback
function callback(err, response) {
    if (err) {
        console.log(err)
        h1 = document.createElement('h1')
        //h1.style.color = 'red'
        h1.setAttribute('style', "color : red")
        h1.appendChild(document.createTextNode(err))
        document.body.appendChild(h1)
    } else {
        console.log(response)
        let obj = JSON.parse(response)
        const ul = document.createElement('ul')
            for (key in obj) {
                const li = document.createElement('li')
                li.appendChild(document.createTextNode(`${key} : ${obj[key]}`))
                ul.appendChild(li)
            }
          document.body.appendChild(ul)  
        }
    }

// Get Post
//http.get('https://jsonplaceholder.typicode.com/posts/1', action)



//Create Data
const data = {
    title: 'custom title',
    body: 'custom body'
}

// post data
http.post('https://jsonplaceholder.typicode.com/posts', data, callback)

//Update Post
//http.put('https://jsonplaceholder.typicode.com/posts',data ,callback)

//Upd Post
//http.delete('https://jsonplaceholder.typicode.com/posts',callback)