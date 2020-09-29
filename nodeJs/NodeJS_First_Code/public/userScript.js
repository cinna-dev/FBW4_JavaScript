const table = document.querySelector('table')

function loadJSON(callback) {

    const xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './users.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(JSON.parse(xobj.responseText));
        }
    };
    xobj.send();
}

document.onload = loadJSON(users => {
    table.innerHTML = '<tr><th scope="col">Name</th><th scope="col">Age</th></tr>'
    users.forEach(user => {
        table.innerHTML += `<tr><td>${user.name}</td><td>${user.age}</td></tr>`
    });
})