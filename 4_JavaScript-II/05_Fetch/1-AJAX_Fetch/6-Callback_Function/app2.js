/* let nails = ["rusty nail", "rusty nail", "bent nail", "clean nail"]

let planks = ["splintered plank", "straight plank", "bent plank"]


function clean(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode('I just cleaned a ' + item));
    document.body.appendChild(li)
}

function groupAndClean(items, cleaningMethod, done) {
    for (i = 0; i < items.length; i++) {
        cleaningMethod(items[i])
    }

    done()
}

groupAndClean(nails.concat(planks), clean, function () {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode('This was a lot of work'));
    document.body.appendChild(li)
}) */


//////book and library//////
  let book1 = {
      title : 'JavaScript',
      author : 'Brad Pitt'
  }
  let book2 = {
    title : 'JavaScript',
    author : 'Brad Pitt'
}

  let library = [book1, book2]

  function writeBook(author, title){  //could be alternatively a constructor 
   /*  this.author = author;
    this.title = title */
    return {author : author, title: title}
  }
  
  function showBooks(){
    const ul = document.createElement('ul')
    library.forEach(item =>{
      const li = document.createElement('li')
      li.appendChild(document.createTextNode(`${item.title} by ${item.author}`))
      ul.appendChild(li)
    })
    
   document.body.appendChild(ul)
}

  function addBook(author, title, writeBook, showBooks ){

    let book = /* new */ writeBook(author, title) //could be alternatively a constructor 
    library.push(book)
    showBooks()
  }
addBook('someAuthor', 'someTitle',writeBook,showBooks)