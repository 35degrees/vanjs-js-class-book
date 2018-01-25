//BOOK CONSTRUCTOR

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI CONSTRUCTOR 
function UI(){

}

UI.prototype.addBookToList = function(book){
const list = document.getElementById('book-list');
//create
const row = document.createElement('tr');

row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>

`;

list.appendChild(row);
}

UI.prototype.showAlert = function(message, className){
  const div = document.createElement('div')

  div.className = `alert ${className}`;
  //add text
  div.appendChild(document.createTextNode(message));

  const container = document.querySelector('.container');

  const form = document.querySelector('#book-form')

  container.insertBefore(div, form);

  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 2000)
  };

UI.prototype.deleteBook = function (target) {
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
}

UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}
// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  //get form values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  
  //instantiating a book
  const book = new Book(title, author, isbn);

  //instantiate UI book
  const ui = new UI();

  console.log(ui)

  //validate entry
  if(title === '' || author === '' || isbn === '') {
    ui.showAlert('Please enter all fields', 'error')
  } else {
    ui.addBookToList(book);
    ui.showAlert('Booked added!','success')
    ui.clearFields();
  }
  //add book to list


  //clear fields
  
  e.preventDefault();
})

document.getElementById('book-list').addEventListener('click',function (e){
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert('Book deleted.','success')
  e.preventDefault();
})