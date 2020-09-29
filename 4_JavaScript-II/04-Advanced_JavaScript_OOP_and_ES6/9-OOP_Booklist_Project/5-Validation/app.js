// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI() {}

//Add Book to List
UI.prototype.addBookToList = function (book) {
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
UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// delete book
UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete') {
        target.closest('tr').remove()
        //target.parentElement.parentElement.remove()
    }
}
//Give Validation Feedback
UI.prototype.showAlert = function (message, className) {
    //Create Div
    const div = document.createElement('div')
    //add classname
    div.className = `alert ${className}`
    //Add Text
    div.appendChild(document.createTextNode(message))
    //Append
    //1-Get Parent
    const container = document.querySelector('.container')
    //Get Form
    const form = document.querySelector('#book-form')
    //Insert Alert
    container.insertBefore(div, form) //Inserts befor the element
    //Timeout after 3sec
    setTimeout(function () {
        document.querySelector('.alert').remove()
        //div.remove()
    }, 3000)
}

//Event Listeners
////Event Listener for add book
document.getElementById('book-form').addEventListener('submit', e => {
    //Get inputs values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    //Initiate Book
    const book = new Book(title, author, isbn)
    //Initiate Ui
    const ui = new UI()
    //validation

    if (!title || !author || !isbn) {
        //Show Error Feed Back
        ui.showAlert('Please fill in all the fields', 'error')
    } else {
        //Add book to list
        ui.addBookToList(book)
        //Clear fields
        ui.clearFields()
        //Show Successfull Feed Back
        ui.showAlert('the Book Added Successfully', 'success')
    }
    e.preventDefault()
})
////Event Listener for delete
document.getElementById('book-list').addEventListener('click', e => {
    //Int UI
    const ui = new UI();
    //Delete Book
    ui.deleteBook(e.target)
    //Show Feedback
    ui.showAlert('The Book was removed successfully', 'success')
    e.preventDefault()
})