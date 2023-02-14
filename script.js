
let books=JSON.parse(localStorage.getItem('books')) || []

const booksList=document.querySelector('.books')
const form=document.querySelector('form')
const {title,author}=form.elements


function generateBooks(data){
    
    data.forEach((item)=>{
        let book=document.createElement('div')
        book.innerHTML=`
        <h3>${item.title}</h3>
        <p>${item.author}</p>
        <button type="button" onclick="removeBooks(${item.id})">Remove</button>
        <hr/>
        `
        booksList.appendChild(book)
    })
}
function addBooks(title,author){
    let idRandom=Math.floor(Math.random() * 100000)
    let bookInfo={id:idRandom,title:title.value,author:author.value}
    books.push(bookInfo)
    localStorage.setItem('books',JSON.stringify(books))
}
function removeBooks(id){
    books=books.filter(book=>book.id!==id)
    localStorage.setItem('books',JSON.stringify(books))
    window.location.reload(); 
}
form.addEventListener('submit',function(event){
    addBooks(title,author)
})
generateBooks(books)
