const mylibrary=[];

function Book(title,author,pages,read){
    this.id=crypto.randomUUID();
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

Book.prototype.toggleReadStatus=function(){
    this.read = !this.read;
}

function addBookToLibrary(title,author,pages,read){
    const newBook=new Book(title,author,pages,read);
    mylibrary.push(newBook);
    displayBooks();
}

function removeBookFromLibrary(id){
    const index=mylibrary.findIndex((book)=>book.id===id);
    if(index !== -1){
        mylibrary.splice(index,1);
        displayBooks();
    }
}

function displayBooks(){
    const libraryContainer=document.getElementById("library-container");
    libraryContainer.innerHTML=""; //clears any content

    mylibrary.forEach((book)=>{
        const card=document.createElement("div");
        card.classList.add("book-card");
        card.dataset.id=book.id;

        card.innerHTML=`
            <h2>${escapeHTML(book.title)}</h2>
            <p><strong>Author: </strong>${escapeHTML(book.author)}</p>
            <p><strong>Pages: </strong>${book.pages}</p>
            <button class="status-btn ${book.read?"read":"unread"}">
                ${book.read?"Read":"Not Read Yet"}
            </button>
            <button class="delete-btn">Remove</button>
        `;

        const statusBtn = card.querySelector(".status-btn");
        statusBtn.addEventListener("click",()=>{
            book.toggleReadStatus();
            displayBooks();
        });

        const deleteBtn = card.querySelector(".delete-btn");
        deleteBtn.addEventListener("click",()=>{
            removeBookFromLibrary(book.id);
        });
        libraryContainer.appendChild(card);
    });
}

function escapeHTML(str){
    const div=document.createElement("div");
    div.textContent=str;
    return div.innerHTML;
}

const modal=document.getElementById("book-modal");
const bookForm=document.getElementById("book-form");
const clearBtn=document.getElementById("clear-button");

clearBtn.addEventListener("click",()=>{
    bookForm.reset();
});

bookForm.addEventListener("submit",(e)=>{

    e.preventDefault();
    const title=document.getElementById("title").value;
    const author=document.getElementById("author").value;
    const pages=document.getElementById("pages").value;
    const read=document.getElementById("read").checked;

    addBookToLibrary(title,author,parseInt(pages,10),read);
    modal.close();
});

addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);
addBookToLibrary("Kartikkkk","Kartik",56,true);