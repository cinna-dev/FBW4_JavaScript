const div = document.body.appendChild(document.createElement('div'))
const h2 = div.appendChild(document.createElement('h2'))
h2.appendChild(document.createTextNode('HelvetiList'));
const ul = div.appendChild(document.createElement('ul'))
const arrayOfCities = ['Zurich','Geneva','Winterhur','Lausanne','Luceme'] 

arrayOfCities.forEach(function(item){
    const li = document.createElement('li');
    const a = li.appendChild(document.createElement('a'))
    a.appendChild(document.createTextNode(`${item}`))
    ul.appendChild(li)
})

///////////////// inline Style //////////////
/* div.style.width ='width: 200px;';
h2.style = 'font: 400 40px/1.5 Helvetica, Verdana, sans-serif; margin: 0; padding: 0;';
ul.style = 'list-style-type: none; margin: 0; padding: 0;';
li = Array.from(document.getElementsByTagName('li'))
li.forEach(function(item){
    item.style.font =  '200 20px/1.5 Helvetica, Verdana, sans-serif'
    item.style.borderBottom = '1px solid #ccc'
    item.firstChild.style ='text-decoration: none; color: #000; display: block width: 200px; -webkit-transition: font-size 0.3s ease, background-color 0.3s ease; -moz-transition: font-size 0.3s ease, background-color 0.3s ease;   -o-transition: font-size 0.3s ease, background-color 0.3s ease; -ms-transition: font-size 0.3s ease, background-color 0.3s ease; transition: font-size 0.3s ease, background-color 0.3s ease;'
})
console.log(li[0].firstChild)
li[li.length-1].style.border = 'none;' */
 
///////////////// Style by classname ///////////////////
div.className ='div';
h2.className = 'h2';
ul.className = 'ul';
Array.from(ul.children).forEach(function(item){
    item.className =  'li';
    item.firstChild.className ='li a';
    item.firstChild.className +='li a:hover';
})
ul.children[ul.children.length-1].className = 'li:last-child';