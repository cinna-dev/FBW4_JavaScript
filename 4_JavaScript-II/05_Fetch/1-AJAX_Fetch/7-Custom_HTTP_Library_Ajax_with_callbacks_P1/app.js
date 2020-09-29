const http = new easyHTTP; // does not need parantethese because of the "new" constructor keyword

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, response) { //Callback
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
        for(key in obj){
            const li = document.createElement('li')
            li.appendChild(document.createTextNode(`${key} : ${obj[key]}`))
            ul.appendChild(li)
        }
        document.body.appendChild(ul)
    }
})



//console.log(posts)