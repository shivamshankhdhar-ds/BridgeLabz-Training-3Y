// Q6: Progressive Discount System

// Original purchase amount.
const originalTotal = 7500;

let discountPercentage = 0;

// Select the discount based on the purchase amount.
if (originalTotal >= 10000) {
    discountPercentage = 25;
} else if (originalTotal >= 5000) {
    discountPercentage = 15;
} else if (originalTotal >= 2000) {
    discountPercentage = 5;
}

// Calculate discount and final price.
const discountAmount = originalTotal * discountPercentage / 100;
const finalPrice = Math.round(originalTotal - discountAmount);

// Display the result.
console.log("Shopping Discount Report");
console.log("------------------------");
console.log(`Original Total: ₹${originalTotal.toFixed(2)}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Discount Amount: ₹${discountAmount.toFixed(2)}`);
console.log(`Final Price: ₹${finalPrice}`);