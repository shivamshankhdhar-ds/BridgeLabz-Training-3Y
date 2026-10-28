
"use strict";

// Q1: Product class with discount and filtering

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        if (percent < 0 || percent > 100) {
            throw new Error("Discount must be between 0 and 100");
        }

        this.price = this.price - (this.price * percent / 100);
    }

    displayDetails() {
        return `ID: ${this.id} | ${this.name} | ` +
            `Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Headphones", 1800, "Electronics"),
    new Product(3, "Notebook", 150, "Stationery"),
    new Product(4, "Keyboard", 1200, "Accessories")
];

products[0].applyDiscount(10);

console.log("All Products:");
products.forEach(product => console.log(product.displayDetails()));

console.log("\nProducts with price above ₹1000:");
const expensiveProducts = products.filter(product => product.price > 1000);

expensiveProducts.forEach(product => console.log(product.displayDetails()));
