
"use strict";

// Q7: Validate username and password with regular expressions.

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", event => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const errors = [];

    if (username.length < 5) {
        errors.push("Username must contain at least 5 characters.");
    }

    if (password.length < 8) {
        errors.push("Password must contain at least 8 characters.");
    }

    if (!/[0-9]/.test(password)) {
        errors.push("Password must contain a number.");
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain an uppercase letter.");
    }

    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain a lowercase letter.");
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
        errors.push("Password must contain a special character.");
    }

    const message = document.getElementById("message");

    if (errors.length > 0) {
        message.textContent = errors.join("\n");
        message.style.color = "red";
    } else {
        message.textContent = "Login validation successful!";
        message.style.color = "green";
    }
});
