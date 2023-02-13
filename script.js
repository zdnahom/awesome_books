const books=[
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
        let book=`<div>
        <h3>${item.title}</h3>
        <h3>${item.autor}</h3>
        <button type="button">Remove</button>
        <hr/>
        </div>
        `
        booksList.appendChild(book)
    })
}
generateBooks()
