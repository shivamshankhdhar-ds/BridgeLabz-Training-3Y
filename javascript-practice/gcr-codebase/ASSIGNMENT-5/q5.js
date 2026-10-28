
"use strict";

// Q5: Prototype inheritance

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

// Student inherits Person's prototype methods.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const student1 = new Student("Shivam", "Data Science and AI");

student1.showName();
student1.showBranch();

console.log(
    "Person prototype accessible:",
    Person.prototype.isPrototypeOf(student1)
);

// Output:
// Name: Shivam
// Branch: Data Science and AI
// Person prototype accessible: true
