
"use strict";

// Q1: Demonstrating callback flow

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);

    // Execute the callback after greeting the user.
    callback();
}

// Pass showEndMessage as a callback function.
greetUser("Shivam", showEndMessage);

// Output:
// Hello Shivam
// Welcome to the course!
