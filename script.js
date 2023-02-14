/* eslint no-unused-vars: 0 */
let books = JSON.parse(localStorage.getItem('books')) || [];
console.log(books)
const booksList = document.querySelector('.books');
const form = document.querySelector('form');
const { title, author } = form.elements;

function generateBooks(data) {
  data.forEach((item) => {
    const book = document.createElement('div');
    book.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.author}</p>
        <button type="button" onclick="Books.removeBooks(${item.id})">Remove</button>
        <hr/>
        `;
    booksList.appendChild(book);
  });
}

class Book {
  constructor (id, title, author){
  this.id = id;
  this.title = title;
  this.author = author;
  }
}

class Library {
  lists = books;
  addBooks(title, author) {
    console.log('it is clicked');
    // const ourBooks = JSON.parse(localStorage.getItem('books'));
    const idRandom = Math.floor(Math.random() * 100000);
    // const bookInfo = { id: idRandom, title: title.value, author: author.value };
    const bookInfo = new Book(idRandom, title.value, author.value)
      this.lists.push(bookInfo);
    localStorage.setItem('books', JSON.stringify(this.lists));
  }
  removeBooks(id) {
    this.lists = this.lists.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(this.lists));
    window.location.reload();
  }
  }
// function addBooks(title, author) {
//   const idRandom = Math.floor(Math.random() * 100000);
//   // const bookInfo = { id: idRandom, title: title.value, author: author.value };
//   const bookInfo = new Book(idRandom, title.value, author.value)
//     books.push(bookInfo);
//   localStorage.setItem('books', JSON.stringify(books));
// }

form.addEventListener('submit', (event) => {
  // event.preventDefault();
  Books.addBooks(title, author);
});
const Books = new Library();


generateBooks(books);
// localStorage.clear();

