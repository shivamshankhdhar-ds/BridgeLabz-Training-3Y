
"use strict";

// Q7: Smart Calculator

class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Invalid operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}

function calculate(operation, num1, num2) {
    switch (operation) {
        case "add":
            return num1 + num2;

        case "divide":
            if (num2 === 0) {
                throw new Error("Cannot divide by zero");
            }
            return num1 / num2;

        case "power":
            return Math.pow(num1, num2);

        case "root":
            if (num1 < 0) {
                throw new Error("Cannot find real square root of a negative number");
            }
            return Math.sqrt(num1);

        case "subtract":
            return num1 - num2;

        default:
            throw new InvalidOperationError(operation);
    }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

console.log("Smart Calculator Report");
console.log("-----------------------");

for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);
        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.log(`${operation}: ${error.name} - ${error.message}`);
    }
}

// Debug observation:
// Set a breakpoint inside calculate() and watch operation, num1, and num2.
// try...catch lets the remaining operations execute after an error.
