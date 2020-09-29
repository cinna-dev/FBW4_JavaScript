// Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//UI Class
class UI {
    //Add Book to List
   static addBookToList(book) {
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
    static clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
    // delete book
    static deleteBook(target) {
        if (target.className === 'delete') {
            target.closest('tr').remove()
            //target.parentElement.parentElement.remove()
        }
    }
    //Give Validation Feedback
    static showAlert(message, className) {
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
}
console.log(typeof UI)
//Event Listeners
////Event Listener for add book
document.getElementById('book-form').addEventListener('submit', e => {
    //Get inputs values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    //Initiate Book
    const book = new Book(title, author, isbn)
    //validation
    if (!title || !author || !isbn) {
        //Show Error Feed Back
        UI.showAlert('Please fill in all the fields', 'error')
    } else {
        //Add book to list
        UI.addBookToList(book)
        //Clear fields
        UI.clearFields()
        //Show Successfull Feed Back
        UI.showAlert('the Book Added Successfully', 'success')
    }
    e.preventDefault()
})
////Event Listener for delete
document.getElementById('book-list').addEventListener('click', e => {
    //Delete Book
    UI.deleteBook(e.target)
    //Show Feedback
    UI.showAlert('The Book was removed successfully', 'success')
    e.preventDefault()
})


//////////////////// Explaining Static //////////////////

//Static methods
class User{
  static method(){   //static = property is not part of the Instance of class // will become a method for the Class not for the Object created from the Class
        return 'Hi'
    }
}

let user = new User
console.log(user)
console.log(User.method())