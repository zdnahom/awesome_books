/* eslint no-unused-vars: 0 */
let books = JSON.parse(localStorage.getItem("books")) || [];
const booksList = document.querySelector(".books");
const form = document.querySelector("form");
const { title, author } = form.elements;

function generateBooks(data) {
  data.forEach((item) => {
    const book = document.createElement("div");
    book.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.author}</p>
        <button type="button" onclick="lib.removeBooks(${item.id})">Remove</button>
        <hr/>
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
    console.log(this.books)
    localStorage.setItem("books", JSON.stringify(this.books));
  }
  removeBooks(id) {
    this.books = this.books.filter((book) => book.id !== id);
    localStorage.setItem("books", JSON.stringify(this.books));
    window.location.reload();
  }
}

form.addEventListener("submit", (event) => {
  lib.addBooks(title, author);
});

const lib = new Library();
generateBooks(books);
