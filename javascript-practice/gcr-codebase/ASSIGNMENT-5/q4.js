
"use strict";

// Q4: Car constructor and shared prototype method

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// One shared method is stored on the prototype.
Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Mahindra", "Thar");

car1.getDetails();
car2.getDetails();

console.log(
    "Both cars share the method:",
    car1.getDetails === car2.getDetails
);

// Output:
// Brand: Toyota, Model: Fortuner
// Brand: Mahindra, Model: Thar
// Both cars share the method: true
