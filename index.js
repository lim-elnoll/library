let myLibrary = [];
const log = console.log;

function Book(name, author, pages, isRead) {
  this.name = name
  this.author = author
  this.pages = pages
  this.isRead = isRead
}

function addBookToLibrary() {
  // form.style.cssText = "display: block;"
  form.className = 'form-add'
  log('Do you wanna add a book?')
}

let web = new Book('Web Dev', 'John Dean', 330, true);
log(web);

let addBtn = document.getElementById('add')
let form = document.querySelector('form')



addBtn.addEventListener('click', addBookToLibrary)