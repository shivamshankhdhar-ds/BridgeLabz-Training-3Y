
"use strict";

// Q10: Nested Hoisting and Closures

function outer() {
    // var count is hoisted but initially undefined.
    console.log("Outer count before initialization:", count);

    var count = 5;

    function inner() {
        // This local var count is separate from outer count.
        // It shadows the outer variable.
        console.log("Inner count before initialization:", count);

        var count = 10;

        console.log("Inner count after initialization:", count);
    }

    inner();

    console.log("Outer count after inner():", count);
}

outer();

// Expected output:
// Outer count before initialization: undefined
// Inner count before initialization: undefined
// Inner count after initialization: 10
// Outer count after inner(): 5

// Arrow function comparison:
function outerWithArrow() {
    var count = 5;

    const inner = () => {
        // Arrow function does not create a separate `this` context
        // and reads count from its surrounding lexical scope.
        console.log("Arrow inner count:", count);
    };

    inner();
}

outerWithArrow();

// Expected: Arrow inner count: 5

// Debug observation:
// Add breakpoints at the console.log statements.
// Watch count in the Scope panel and inspect the Call Stack.
// The Call Stack shows which function called the active function.
