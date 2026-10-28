
"use strict";

// Q3: Arrow functions do not have their own `this`.

const user = {
    name: "Shivam",

    showName: () => {
        console.log("Arrow function name:", this.name);
    }
};

user.showName();

// The arrow function takes `this` from its surrounding scope.
// In a Node.js CommonJS file, this.name is generally undefined.

// Correct version: use a normal method.
const correctedUser = {
    name: "Shivam",

    showName: function () {
        console.log("Normal function name:", this.name);
    }
};

correctedUser.showName();

// Output:
// Arrow function name: undefined
// Normal function name: Shivam
