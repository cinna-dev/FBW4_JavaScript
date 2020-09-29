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
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => {
                    console.log(res);
                    if (res.ok) {
                        return res.json()
                    } else return res.status
                })
                .then(data => {
                    let localData;
                    
                    localStorage.setItem('localData', JSON.stringify(data))
                })
                .catch(err => {
                    const container = document.createElement('div')
                    container.className = 'container text-center'
                    const card = document.createElement('div')
                    card.className = 'card'
                    const cardBody = document.createElement('div')
                    cardBody.className = 'card-body'
                    const h2 = document.createElement('h2')
                    h2.className = 'text-danger'
                    h2.appendChild(document.createTextNode(err))
                    cardBody.appendChild(h2)
                    card.appendChild(cardBody)
                    container.appendChild(card)
                    document.body.appendChild(container)
                })
        })

    }
    createUi() {
        const data = localStorage.getItem('localData')

        const container = document.createElement('div')
        container.className = 'container'
        document.body.appendChild(container)
        const ul = document.createElement('ul')
        for (let item of data) {
            const li = document.createElement('li')
            li.className = 'list-group-item'
            const card = document.createElement('div')
            card.className = 'card'
            const cardBody = document.createElement('div')
            cardBody.className = 'card-body'
            const img = document.createElement('img')
            img.className = 'card-img-top'
            img.setAttribute('src', item.avatar_url)
            const h2 = document.createElement('h2')
            h2.appendChild(document.createTextNode(`LOGIN : ${item.login}  ID : ${item.id}`))
            h2.className = "card-title";
            cardBody.appendChild(h2)
            card.appendChild(img)
            card.appendChild(cardBody)
            li.appendChild(card)
            ul.appendChild(li)
        }

        ul.className = 'list-group'
        container.appendChild(ul)
    }
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