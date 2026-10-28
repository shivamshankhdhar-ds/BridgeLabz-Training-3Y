
 // Q8: Dynamic Discount Evaluator

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

const originalTotal = cart.reduce(
    (total, product) => total + product.price, 0
);

let discountedTotal = 0;

console.log("Product Discount Report");

for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 10;
    } else if (product.category === "fashion") {
        discountRate = 5;
    }

    const discount = product.price * discountRate / 100;
    const finalPrice = product.price - discount;

    discountedTotal += finalPrice;

    console.log(
        `${product.item}: ₹${product.price} | ` +
        `Discount: ${discountRate}% | ` +
        `Final Price: ₹${finalPrice.toFixed(2)}`
    );
}

let extraDiscount = 0;

if (originalTotal > 50000) {
    extraDiscount = discountedTotal * 0.05;
    discountedTotal -= extraDiscount;
}

console.log("\nCart Summary");
console.log(`Original Total: ₹${originalTotal.toFixed(2)}`);
console.log(`Extra Discount: ₹${extraDiscount.toFixed(2)}`);
console.log(`Final Cart Total: ₹${discountedTotal.toFixed(2)}`);
