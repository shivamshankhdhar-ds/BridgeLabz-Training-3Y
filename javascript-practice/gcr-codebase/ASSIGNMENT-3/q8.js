
"use strict";

// Q8: Strict Mode Showdown

// Original code:
// function demo(a, a) {
//     total = 10;
//     delete total;
// }
// demo(5, 10);
//
// In strict mode, duplicate parameters cause SyntaxError.
// Assigning to undeclared total causes ReferenceError.
// Deleting an unqualified variable identifier is illegal.

// Correct version using ES6 rules:

function demo(a, b) {
    let total = 10;

    console.log("First parameter:", a);
    console.log("Second parameter:", b);
    console.log("Initial total:", total);

    total = total + a + b;

    console.log("Updated total:", total);
}

demo(5, 10);

// Debug observation:
// Watch a, b, and total in VS Code.
// Strict mode prevents accidental creation of global variables.
