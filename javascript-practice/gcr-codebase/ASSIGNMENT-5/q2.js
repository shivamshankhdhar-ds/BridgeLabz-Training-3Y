
"use strict";

// Q2: Apply an operation to every array element

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

// Double each number
const doubledNumbers = applyOperation(
    numbers,
    function (number) {
        return number * 2;
    }
);

// Square each number
const squaredNumbers = applyOperation(
    numbers,
    number => number * number
);

console.log("Original Array:", numbers);
console.log("Doubled Array:", doubledNumbers);
console.log("Squared Array:", squaredNumbers);

// Output:
// Original Array: [1, 2, 3, 4]
// Doubled Array: [2, 4, 6, 8]
// Squared Array: [1, 4, 9, 16]
