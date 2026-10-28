
"use strict";

// Q9: JSON Audit

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const auditErrors = [];
const under18Users = [];

for (let i = 0; i < rawData.length; i++) {
    const lineNumber = i + 1;

    try {
        // Set a breakpoint here to inspect each JSON string.
        const parsed = JSON.parse(rawData[i]);

        // Check required properties.
        if (parsed.user === undefined || parsed.age === undefined) {
            throw new Error("Missing user or age key");
        }

        const age = Number(parsed.age);

        if (!Number.isFinite(age)) {
            throw new Error("Invalid age value");
        }

        const user = {
            ...parsed,
            age: age
        };

        cleanData.push(user);

        if (age < 18) {
            under18Users.push(user);
        }

        console.log(`Line ${lineNumber}: Valid JSON`);

    } catch (error) {
        auditErrors.push({
            line: lineNumber,
            message: error.message
        });

        console.log(`Line ${lineNumber}: Error - ${error.message}`);
    }
}

console.log("\nJSON Audit Report");
console.log("Clean Data:", cleanData);
console.log("Audit Errors:", auditErrors);
console.log("Valid Entries:", cleanData.length);
console.log("Invalid Entries:", auditErrors.length);
console.log("Users Under 18:", under18Users);

// Debug observation:
// JSON.parse throws an error for malformed JSON.
// catch handles the error and the loop continues.
