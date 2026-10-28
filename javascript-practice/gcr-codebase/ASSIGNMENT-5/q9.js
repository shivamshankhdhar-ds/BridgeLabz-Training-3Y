
"use strict";

// Q9: Implement inheritance using ES6 classes.

class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // Initialize the Person properties.
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const student1 = new Student("Shivam", "Data Science and AI");

student1.showName();
student1.showBranch();

// Compare with the prototype-based version from Q5.
function PrototypePerson(name) {
    this.name = name;
}

PrototypePerson.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function PrototypeStudent(name, branch) {
    PrototypePerson.call(this, name);
    this.branch = branch;
}

PrototypeStudent.prototype = Object.create(PrototypePerson.prototype);
PrototypeStudent.prototype.constructor = PrototypeStudent;

PrototypeStudent.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const student2 = new PrototypeStudent(
    "Shivam",
    "Data Science and AI"
);

console.log("\nPrototype Version:");
student2.showName();
student2.showBranch();

// Both versions demonstrate the same inheritance behavior.
