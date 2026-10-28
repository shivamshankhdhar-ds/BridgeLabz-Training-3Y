
"use strict";

// Q1: Asynchronous Coffee Process

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject(new Error("Water boiling failed"));
            } else {
                console.log("Water boiled successfully.");
                resolve();
            }
        }, 1000);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject(new Error("Coffee brewing failed"));
            } else {
                console.log("Coffee brewed successfully.");
                resolve();
            }
        }, 1500);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject(new Error("Pouring coffee failed"));
            } else {
                console.log("Coffee poured into the cup.");
                resolve();
            }
        }, 1000);
    });
}

console.log("Starting coffee preparation...");

boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.log("Coffee process failed:", error.message));

// Each Promise resolves or rejects later, so the process is asynchronous.
