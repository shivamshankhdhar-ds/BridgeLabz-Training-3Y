
"use strict";

// Q1: Dynamic Data Parser

const apiData = [
    "25", "true", "false", "NaN", " ",
    "100px", "3.14", null, undefined
];

const validNumbers = [];
const invalidNumbers = [];

console.log("Dynamic Data Parser Report");

for (const value of apiData) {
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    // Number.isNaN detects values that cannot be treated as valid numbers.
    // Blank strings and null convert to 0, so handle them explicitly.
    const isInvalid =
        value === null ||
        value === undefined ||
        (typeof value === "string" && value.trim() === "") ||
        Number.isNaN(numberValue);

    console.log("\nOriginal Value:", value);
    console.log("Number Form:", numberValue);
    console.log("Boolean Form:", booleanValue);
    console.log("String Form:", stringValue);

    if (isInvalid) {
        invalidNumbers.push(value);
        console.log("Status: Invalid numeric data");
    } else {
        validNumbers.push(numberValue);
        console.log("Status: Valid numeric data");
    }
}

console.log("\nValid Numbers:", validNumbers);
console.log("Invalid Values:", invalidNumbers);
console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidNumbers.length);

// Debug observation: Number("100px") is NaN,
// but Number(" ") and Number(null) are 0.
