
"use strict";

// Q6: Calculate annual salary and company payout.

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (percent < 0) {
            throw new Error("Bonus cannot be negative.");
        }

        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Amit", "IT", 45000),
    new Employee(2, "Sara", "HR", 38000),
    new Employee(3, "Kiran", "Finance", 52000),
    new Employee(4, "Neha", "Marketing", 40000),
    new Employee(5, "Rahul", "IT", 60000)
];

// Apply a 10% bonus to employee 1.
employees[0].applyBonus(10);

console.log("Employee Annual Salary Report");

employees.forEach(employee => {
    console.log(
        `${employee.name} (${employee.department}): ` +
        `₹${employee.getAnnualSalary().toFixed(2)} per year`
    );
});

// reduce() calculates the total annual salary payout.
const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log(
    `Total Annual Company Payout: ₹${totalAnnualPayout.toFixed(2)}`
);
