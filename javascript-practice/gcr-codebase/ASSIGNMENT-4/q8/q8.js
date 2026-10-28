
"use strict";

// Q8: Update an object using form values.

const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

const userForm = document.getElementById("userForm");
const output = document.getElementById("output");

// Display the original data in the form.
document.getElementById("name").value = user.name;
document.getElementById("email").value = user.email;
document.getElementById("age").value = user.age;

function displayUser() {
    output.textContent = JSON.stringify(user, null, 2);
}

displayUser();

userForm.addEventListener("submit", event => {
    event.preventDefault();

    // Update the same object with the latest form values.
    user.name = document.getElementById("name").value.trim();
    user.email = document.getElementById("email").value.trim();
    user.age = Number(document.getElementById("age").value);

    displayUser();
    console.log("Updated User:", user);
});
