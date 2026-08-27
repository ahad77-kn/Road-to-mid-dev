// library objects. stores books and mathods for managing them.

const library = {
    name: "City Library",

    books: [
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            available: true
        },
        {
            title: "1984",
            author: "George Orwell",
            available: true
        },
        {
            title: "Animal Farm",
            author: "George Orwell",
            available: false
        },
        {
            title: "Harry Potter",
            author: "J.K. Rowling",
            available: true
        }
    ],

     // Borrows a book if it is available.
    borrow(title) {
        const book = this.books.find(
            (book) => book.title === title
        );

        if (!book) {
            return "Book not found";
        }

        if (!book.available) {
            return "Book is already borrowed";
        }

        book.available = false;
        return "Book borrowed";
    },

    // Returns a borrowed book.
    return(title) {
        const book = this.books.find(
            (book) => book.title === title
        );

        if (!book) {
            return "Book not found";
        }

        book.available = true;
        return "Book returned";
    },

    // Checks whether a book is available.
    isAvailable(title) {
        const book = this.books.find(
            (book) => book.title === title
        );

        return book ? book.available : false;
    },

    // Finds all books written by an author.
    findByAuthor(author) {
        return this.books.filter(
            (book) => book.author === author
        );
    }
};


// Dot notation
console.log(library.books);

// Bracket notation
console.log(library["books"]);


// Object destructuring
const { name, books } = library;
console.log(name, books.length);


// Destructuring a book object
const { title, author } = books[0];
console.log(title, author);


// Third destructuring example
const { available } = books[0];
console.log(available);


// Object.keys
console.log(Object.keys(books[0]));

// Object.values
console.log(Object.values(books[0]));

// Object.entries
console.log(Object.entries(books[0]));


// Spread copies a book without changing the original.
const updatedBook = {
    ...books[0],
    available: false
};

console.log(updatedBook);


// Testing methods
console.log(library.isAvailable("The Hobbit"));

console.log(library.borrow("The Hobbit"));

console.log(library.isAvailable("The Hobbit"));

console.log(library.return("The Hobbit"));

console.log(library.findByAuthor("George Orwell"));