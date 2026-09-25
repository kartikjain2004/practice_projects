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

// Classic Literature
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, false);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 234, false);
addBookToLibrary("Lord of the Flies", "William Golding", 224, true);
addBookToLibrary("Animal Farm", "George Orwell", 112, true);
addBookToLibrary("Brave New World", "Aldous Huxley", 268, false);
addBookToLibrary("Fahrenheit 451", "Ray Bradbury", 249, true);
addBookToLibrary("Jane Eyre", "Charlotte Brontë", 507, false);
addBookToLibrary("Wuthering Heights", "Emily Brontë", 416, false);
addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", 671, true);
addBookToLibrary("The Brothers Karamazov", "Fyodor Dostoevsky", 796, false);
addBookToLibrary("War and Peace", "Leo Tolstoy", 1225, false);
addBookToLibrary("Anna Karenina", "Leo Tolstoy", 864, true);
addBookToLibrary("The Count of Monte Cristo", "Alexandre Dumas", 1276, true);
addBookToLibrary("Les Misérables", "Victor Hugo", 1462, false);
addBookToLibrary("The Picture of Dorian Gray", "Oscar Wilde", 254, true);
addBookToLibrary("Frankenstein", "Mary Shelley", 280, true);
addBookToLibrary("Dracula", "Bram Stoker", 418, false);

// Sci-Fi & Fantasy
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("The Fellowship of the Ring", "J.R.R. Tolkien", 423, true);
addBookToLibrary("The Two Towers", "J.R.R. Tolkien", 352, true);
addBookToLibrary("The Return of the King", "J.R.R. Tolkien", 416, true);
addBookToLibrary("Dune", "Frank Herbert", 412, true);
addBookToLibrary("Dune Messiah", "Frank Herbert", 256, false);
addBookToLibrary("The Name of the Wind", "Patrick Rothfuss", 662, true);
addBookToLibrary("The Way of Kings", "Brandon Sanderson", 1007, true);
addBookToLibrary("Mistborn: The Final Empire", "Brandon Sanderson", 541, true);
addBookToLibrary("A Game of Thrones", "George R.R. Martin", 694, true);
addBookToLibrary("A Clash of Kings", "George R.R. Martin", 768, false);
addBookToLibrary("Neuromancer", "William Gibson", 271, false);
addBookToLibrary("Snow Crash", "Neal Stephenson", 470, false);
addBookToLibrary("Hyperion", "Dan Simmons", 482, true);
addBookToLibrary("The Three-Body Problem", "Cixin Liu", 302, true);
addBookToLibrary("Foundation", "Isaac Asimov", 255, true);
addBookToLibrary("Ender's Game", "Orson Scott Card", 324, true);
addBookToLibrary("The Martian", "Andy Weir", 369, true);
addBookToLibrary("Project Hail Mary", "Andy Weir", 496, true);
addBookToLibrary("Do Androids Dream of Electric Sheep?", "Philip K. Dick", 210, false);

// Modern Fiction & Mystery
addBookToLibrary("The Alchemist", "Paulo Coelho", 208, true);
addBookToLibrary("Life of Pi", "Yann Martel", 319, true);
addBookToLibrary("The Kite Runner", "Khaled Hosseini", 371, true);
addBookToLibrary("A Thousand Splendid Suns", "Khaled Hosseini", 384, false);
addBookToLibrary("The Shadow of the Wind", "Carlos Ruiz Zafón", 487, true);
addBookToLibrary("Gone Girl", "Gillian Flynn", 422, true);
addBookToLibrary("The Da Vinci Code", "Dan Brown", 489, true);
addBookToLibrary("Angels & Demons", "Dan Brown", 710, false);
addBookToLibrary("The Girl with the Dragon Tattoo", "Stieg Larsson", 465, true);
addBookToLibrary("The Silent Patient", "Alex Michaelides", 336, false);

// Non-Fiction & Self-Improvement
addBookToLibrary("Sapiens", "Yuval Noah Harari", 443, true);
addBookToLibrary("Homo Deus", "Yuval Noah Harari", 450, false);
addBookToLibrary("Atomic Habits", "James Clear", 320, true);
addBookToLibrary("Deep Work", "Cal Newport", 304, true);
addBookToLibrary("Thinking, Fast and Slow", "Daniel Kahneman", 499, false);
addBookToLibrary("The Psychology of Money", "Morgan Housel", 252, true);
addBookToLibrary("Man's Search for Meaning", "Viktor E. Frankl", 165, true);
addBookToLibrary("Educated", "Tara Westover", 334, true);
addBookToLibrary("Becoming", "Michelle Obama", 448, false);
addBookToLibrary("Shoe Dog", "Phil Knight", 400, true);
