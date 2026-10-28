
"use strict";

// Q9: Shopping cart with percentage coupon codes.

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        if (price < 0 || quantity <= 0) {
            throw new Error("Price must be non-negative and quantity positive.");
        }

        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    applyCoupon(coupon) {
        // Accept SAVE20, DISC10, and similar uppercase codes.
        const couponPattern = /^(SAVE|DISC)(\d{1,2})$/;
        const match = coupon.match(couponPattern);

        if (!match) {
            throw new Error("Invalid coupon format.");
        }

        const discountPercent = Number(match[2]);

        if (discountPercent < 1 || discountPercent > 100) {
            throw new Error("Coupon discount must be between 1% and 100%.");
        }

        return this.getTotal() * (1 - discountPercent / 100);
    }

    displayItems() {
        this.items.forEach(item => {
            console.log(
                `${item.name}: ₹${item.price} x ${item.quantity} = ` +
                `₹${(item.price * item.quantity).toFixed(2)}`
            );
        });
    }
}

const cart = new Cart();

cart.addItem("Laptop", 45000, 1);
cart.addItem("Mouse", 800, 2);
cart.addItem("Keyboard", 1500, 1);

console.log("Shopping Cart");
cart.displayItems();

const originalTotal = cart.getTotal();
console.log(`Original Total: ₹${originalTotal.toFixed(2)}`);

try {
    const coupon = "SAVE20";
    const finalTotal = cart.applyCoupon(coupon);

    console.log(`Coupon Applied: ${coupon}`);
    console.log(`Final Total: ₹${finalTotal.toFixed(2)}`);
    console.log(`You Saved: ₹${(originalTotal - finalTotal).toFixed(2)}`);
} catch (error) {
    console.log("Coupon Error:", error.message);
}
