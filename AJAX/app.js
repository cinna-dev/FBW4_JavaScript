/* let x = JSON.parse('{"id" : 0, "name" : "Mostafa"}');   // Object keys are strings , JSON refrects that // otherwise error
console.log(x.name)

let y = {
    name: "object",
    age : 21
}

let z = JSON.stringify(y)
console.log(z)
 */




// when window has loaded in browser
window.onload = function () {
    console.log("Document was loaded");
    let div = document.getElementById('someDiv');
    div.innerHTML = 'Document was loaded';
}

let div = document.createElement('div')

function showUsers() {
    let xhr = new XMLHttpRequest();
    console.log(Object.keys(xhr)) // shows all keys of object
    
    xhr.open('GET', 'users.json', true);
    xhr.send();
    xhr.onprogress = function () {
        div.innerHTML = "Prossecing..."
        document.body.appendChild(div)
    }
    xhr.onreadystatechange = function () {
        switch (this.readyState) {
            case 1:
                div.innerHTML = "Conection established";
                break;
            case 2:
                div.innerHTML = "Request recieved";
                break;
            case 3:
                div.innerHTML = "processing request";
                break;
            case 4:
                let response = JSON.parse(this.responseText);
                //div.innerHTML = '';
                response.forEach(item => {
                    let p = document.createElement('p')
                    p.innerHTML = `Name : ${item.name} Phone : ${item.phone} Email : ${item.email}`
                    div.append(p)
                });
                console.log(response)
                break;
            default:
                div.innerHTML = "Request not initialized";
                break;
        }
    }
}





//terminal "node app.js" 