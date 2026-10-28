
"use strict";

// Q4: Debugging Mystery

function showMessage() {
    // Original: greeting = "Welcome";
    // This throws ReferenceError in strict mode because
    // greeting was never declared.

    const greeting = "Welcome";
    console.log(greeting);
}

showMessage();

// Correct declaration creates a local variable inside the function.
// Debugging: Add a breakpoint at the const line.
// Add greeting to the Watch panel and inspect the Call Stack.
// The Call Stack shows showMessage() called from the main script.
