
"use strict";

// Q6: Pyramid Pattern Generator

// Change this value to control the number of rows.
// Default is 5. For user input, pass a number as a command-line argument.
const inputRows = process.argv[2];
const rows = inputRows === undefined ? 5 : Number(inputRows);

if (!Number.isInteger(rows) || rows < 1 || rows > 50) {
    console.log("Please provide a whole number between 1 and 50.");
} else {
    console.log("Pyramid Pattern:");

    for (let i = 1; i <= rows; i++) {
        let pattern = "";

        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern.trimEnd());
    }
}

// Debug observation:
// i controls the row and j controls the stars in each row.
// Use a breakpoint inside the inner loop to watch i, j, and pattern.

// var comparison:
// Replacing let with var makes i and j function-scoped instead of
// block-scoped. This code still prints the same pattern because
// each loop uses the variables synchronously.

// Strict mode catches undeclared assignments, such as: total = 5;

