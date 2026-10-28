
"use strict";

// Q6: Multi-level prototype chain

function Person(name) {
    this.name = name;
}

Person.prototype.introduce = function () {
    console.log(`Name: ${this.name}`);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
    console.log(`Department: ${this.department}`);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function () {
    console.log(`Teaching: ${this.subject}`);
};

const professor1 = new Professor(
    "Amit Sharma",
    "Computer Science",
    "JavaScript"
);

// Access methods from all three levels.
professor1.introduce();
professor1.showDepartment();
professor1.teach();

console.log(
    "Person in prototype chain:",
    Person.prototype.isPrototypeOf(professor1)
);

console.log(
    "Faculty in prototype chain:",
    Faculty.prototype.isPrototypeOf(professor1)
);
