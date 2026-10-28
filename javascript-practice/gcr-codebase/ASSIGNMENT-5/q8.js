
"use strict";

// Q8: Create a custom map-like method for arrays.

Array.prototype.myMap = function (callback, thisArg) {
    if (this == null) {
        throw new TypeError("myMap called on null or undefined");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Callback must be a function");
    }

    const source = Object(this);
    const result = [];

    for (let index = 0; index < source.length; index++) {
        // Match built-in map behavior by skipping empty slots.
        if (index in source) {
            result[index] = callback.call(
                thisArg,
                source[index],
                index,
                source
            );
        }
    }

    return result;
};

const numbers = [1, 2, 3];

const doubled = numbers.myMap(number => number * 2);
const squared = numbers.myMap(number => number * number);

console.log("Original Array:", numbers);
console.log("Doubled Array:", doubled);
console.log("Squared Array:", squared);

// Output:
// Original Array: [1, 2, 3]
// Doubled Array: [2, 4, 6]
// Squared Array: [1, 4, 9]

// Note: Extending built-in prototypes is useful for this exercise,
// but generally should be avoided in production projects.
