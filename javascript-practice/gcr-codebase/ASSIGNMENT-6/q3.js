
"use strict";

// Q3: Convert callback-based bug fetching to a Promise.

function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() < 0.3;

            if (shouldFail) {
                reject(new Error("Bug tracker API failed"));
            } else {
                resolve([
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ]);
            }
        }, 1000);
    });
}

console.log("Fetching bugs...");

getBugs()
    .then(bugs => {
        console.log("Bug Tracker Report");
        console.table(bugs.map((bug, index) => ({
            Number: index + 1,
            Bug: bug
        })));
    })
    .catch(error => {
        console.log("Failed to fetch bugs:", error.message);
    });
