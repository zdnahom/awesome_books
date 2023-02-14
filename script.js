/* eslint no-unused-vars: 0 */
/* eslint max-classes-per-file: ["error", 2] */

const books = JSON.parse(localStorage.getItem('books')) || [];
const booksList = document.querySelector('.books');
const form = document.querySelector('form');
const { title, author } = form.elements;

function generateBooks(data) {
  data.forEach((item) => {
    const title = item.title[0].toUpperCase() + item.title.slice(1);
    const author = item.author[0].toUpperCase() + item.author.slice(1);
    const book = document.createElement('div');
    book.innerHTML = `
        <p> "${title}" by <strong>${author}</strong></p>
        <button type="button" onclick="lib.removeBooks(${item.id})">Remove</button>
        `;
    booksList.appendChild(book);
  });
}

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

class Library {
  books = books;

  addBooks(title, author) {
    const idRandom = Math.floor(Math.random() * 100000);
    const bookInfo = new Book(idRandom, title.value, author.value);
    this.books.push(bookInfo);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  removeBooks(id) {
    this.books = this.books.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(this.books));
    window.location.reload();
  }
}
const lib = new Library();

form.addEventListener('submit', (event) => {
  lib.addBooks(title, author);
});

generateBooks(books);
if (books.length === 0) {
  booksList.style.display = 'none';
}