import {
   Header
} from "./header.js"
import {
   Article,
   Aside,
   ClearFix
} from "./body.js"
import {
   Footer
} from "./footer.js"

let header = new Header('Home Page', 'darkred', 'white', '10vh', '3.5vh')
header.createHeader()

let content1 = `<img style="width:60px;display:block" src="https://image.flaticon.com/icons/svg/124/124010.svg"><img style="width:60px;display:block " src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Google_Chrome_icon_%282011%29.svg/768px-Google_Chrome_icon_%282011%29.svg.png">`

let aside2 = new Aside(content1, 'grey', 'black', "80vh", "25vw", '5rem', true, false, true)
aside2.createAside()

let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos alias vero beatae, officia inventore exercitationem eveniet, quae doloribus sunt voluptatem non. Animi, magnam vel nam dolore nihil quae fugiat vero!Provident at nulla doloribus itaque sequi iure eligendi impedit, accusamus aliquam aperiam eius iusto vero, odio ipsam. Quia, quasi quidem in sequi, inventore numquam accusamus quam, velit dolorem laudantium distinctio!"

let article = new Article(text, "#eeeecc", 'black', "80vh", "50vw", '20px', true)
article.createArticle()

let content2 = `<ul>
<li> item1</li>
<li> item2</li>
<li> item3</li>
<li> item4</li>
</ul>`

let aside = new Aside(content2, 'lightgreen', 'black', "80vh", "25vw", '2rem', false)
aside.createAside()

let clearFix = new ClearFix
clearFix.createClearFix()

let footer = new Footer('Modules Testing Application', '#bb0099', 'black', '10vh', '2rem')
footer.createFooter()

document.getElementById('input').addEventListener('keyup', function () {
   let value = document.getElementById('input').value
   document.getElementById('title').innerText = value
})