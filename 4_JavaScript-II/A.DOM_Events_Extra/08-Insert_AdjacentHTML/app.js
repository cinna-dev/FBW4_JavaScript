const btnTry = document.querySelector('#try');

btnTry.addEventListener('click',myFunction)

function myFunction(){  //Event Handler
    let heading = document.getElementById('myH2')
    heading.insertAdjacentHTML("beforeend","<p>My New Paragraph</p>") //"beforebegin" predefined
}

//console.log(heading)


