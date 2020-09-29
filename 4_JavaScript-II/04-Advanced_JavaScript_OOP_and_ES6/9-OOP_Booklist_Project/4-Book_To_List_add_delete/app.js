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

//Clear Fields

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
} 

// delete book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.closest('tr').remove()
        //target.parentElement.parentElement.remove()
    }
}

//Event Listeners
////Event Listener for add book
document.getElementById('book-form').addEventListener('submit', e =>{
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    //Initiate Book
    const book = new Book(title, author, isbn)
    //Initiate Ui
    const ui = new UI()
    //Add book to list
    ui.addBookToList(book)
    //Clear fields
    ui.clearFields()

    e.preventDefault()
})
////Event Listener for delete
document.getElementById('book-list').addEventListener('click',e =>{
    const ui = new UI();
    ui.deleteBook(e.target)
    e.preventDefault()
})