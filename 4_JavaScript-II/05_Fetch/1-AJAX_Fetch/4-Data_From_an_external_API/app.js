document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    const number = document.querySelector('input[type="number"]').value;    //calls input by attribute

    const xhr = new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true) //api //Application programming interface

    xhr.onload = function(){
        if(this.status === 200){
            let response = JSON.parse(this.responseText);
            let output = '';
            if(response.type === 'success'){
            response.value.forEach(item => {
                output += `<li>${item.joke}</li>`
            });
            }else{
                output = `<li>Something went wrong</li>`
            }
            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send()

    e.preventDefault()
}