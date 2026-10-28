
"use strict";

// Q2: Validate student registration fields using RegExp

const studentForm = document.getElementById("studentForm");

const validators = {
    name: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S+$/
};

const errorMessages = {
    name: "Use alphabets only.",
    email: "Enter a valid email address.",
    phone: "Phone must contain exactly 10 digits.",
    password: "Include an uppercase letter, a number and a special character."
};

function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(fieldId + "Error");
    const isValid = validators[fieldId].test(field.value.trim());

    field.classList.toggle("valid", isValid);
    field.classList.toggle("invalid", !isValid);
    error.textContent = isValid ? "" : errorMessages[fieldId];

    return isValid;
}

Object.keys(validators).forEach(fieldId => {
    document.getElementById(fieldId).addEventListener("input", () => {
        validateField(fieldId);
    });
});

studentForm.addEventListener("submit", event => {
    event.preventDefault();

    const isFormValid = Object.keys(validators)
        .map(validateField)
        .every(Boolean);

    document.getElementById("result").textContent = isFormValid
        ? "Registration successful!"
        : "Please correct the highlighted fields.";
});
