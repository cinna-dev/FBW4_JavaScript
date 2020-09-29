// Book Constructor
function Book(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI(){}

//Add Book to List
UI.prototype.addBookToList = function(book){
   /*  const tbody = document.querySelector('#book-list')
    const tr = document.createElement('tr')
    for(x in book){
        let td = document.createElement('td')
        td.appendChild(document.createTextNode(x))
        tr.appendChild(td)
    }
    let td = document.createElement('td')
    const i = document.createElement('i') 
    td.appendChild(i)
    tr.appendChild(td)
    tbody.appendChild(tr) */

    const list = document.getElementById('book-list')
    const row = document.createElement('tr')
    //Instert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='delete'>X</a></td>`
    list.appendChild(row)
}

