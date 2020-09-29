import Header from './header.js'
import Body from './body.js'
import Footer from './footer.js'

//creating the components
let h =  Header.create()
let b =  Body.create()
let f =  Footer.create()

//appending the components to documents
document.body.append(h)
document.body.append(b)
document.body.append(f)

//Hanling the Input Event
document.getElementById('inpt').addEventListener('keyup', function(e){let title = document.getElementById('title');
    title.innerHTML = e.target.value;})
