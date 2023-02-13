let books=[
    {
        id:1,
        title:'Wonder',
        author:'James'
    },
    {
        id:2,
        title:'The origin',
        author:'Helen'
    },
    {
        id:3,
        title:'Naruto',
        author:'Uzumaki'
    },
]
const booksList=document.querySelector('.books')

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
function removeBooks(id){
    books=books.filter((book)=>book.id!==id)
}

generateBooks(books)
