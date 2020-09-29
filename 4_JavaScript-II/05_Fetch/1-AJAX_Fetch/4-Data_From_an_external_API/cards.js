document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    const number = document.querySelector('input[type="number"]').value;    //calls input by attribute

    const xhr = new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true) //api //Application programming interface

    xhr.onload = function(){
        if(this.status === 200){
            let response = JSON.parse(this.responseText);
            document.querySelector('.jokes').innerHTML = ''
            let output = document.createElement('div')
            if(response.type === 'success'){
            response.value.forEach(item => {
                let card = document.createElement('div')
                card.className = 'card text-align-center';
                let cardBody =  document.createElement('div')
                cardBody.className = 'card-body'
                cardBody.appendChild(document.createTextNode(item.joke))
                card.appendChild(cardBody)
                output.appendChild(card);
            });
            }else{
                output = `<li>Something went wrong</li>`
            }
            document.querySelector('.jokes').appendChild(output)
        }
    }

    xhr.send()

    e.preventDefault()
}