
"use strict";

// Q3: Book issue and return system

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
            return false;
        }

        this.isIssued = true;
        console.log(`Book issued: ${this.title}`);
        return true;
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`"${this.title}" was not issued.`);
            return false;
        }

        this.isIssued = false;
        console.log(`Book returned: ${this.title}`);
        return true;
    }
}

const books = [
    new Book("JavaScript Basics", "John Smith", "ISBN101"),
    new Book("Python Programming", "Alex Brown", "ISBN102"),
    new Book("Data Structures", "Robert Green", "ISBN103")
];

function displayAvailableBooks() {
    console.log("\nAvailable Books:");

    const availableBooks = books.filter(book => !book.isIssued);

    if (availableBooks.length === 0) {
        console.log("No books available.");
    } else {
        availableBooks.forEach(book => {
            console.log(`${book.title} | ${book.author} | ${book.ISBN}`);
        });
    }
}

function issueBookByISBN(isbn) {
    const book = books.find(book => book.ISBN === isbn);

    if (!book) {
        console.log("Book not found.");
        return;
    }

    book.issueBook();
}

displayAvailableBooks();
issueBookByISBN("ISBN102");
displayAvailableBooks();

// Example return:
const issuedBook = books.find(book => book.ISBN === "ISBN102");
issuedBook.returnBook();

displayAvailableBooks();
