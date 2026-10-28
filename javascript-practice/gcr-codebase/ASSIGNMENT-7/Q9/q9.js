const registrationForm = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const successMessage = document.getElementById("successMessage");

// Validate name
function validateName() {
    const error = document.getElementById("nameError");

    if (nameInput.value.trim() === "") {
        error.textContent = "Name is required.";
        nameInput.setAttribute("aria-invalid", "true");
        return false;
    }

    error.textContent = "";
    nameInput.setAttribute("aria-invalid", "false");
    return true;
}

// Validate email
function validateEmail() {
    const error = document.getElementById("emailError");
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        error.textContent = "Email is required.";
        emailInput.setAttribute("aria-invalid", "true");
        return false;
    }

    if (!emailValue.includes("@")) {
        error.textContent = "Email must contain @.";
        emailInput.setAttribute("aria-invalid", "true");
        return false;
    }

    error.textContent = "";
    emailInput.setAttribute("aria-invalid", "false");
    return true;
}

// Validate password
function validatePassword() {
    const error = document.getElementById("passwordError");

    if (passwordInput.value.length < 6) {
        error.textContent =
            "Password must contain at least 6 characters.";

        passwordInput.setAttribute("aria-invalid", "true");
        return false;
    }

    error.textContent = "";
    passwordInput.setAttribute("aria-invalid", "false");
    return true;
}

// Clear errors automatically when the user corrects the input
nameInput.addEventListener("input", function () {
    validateName();
    successMessage.textContent = "";
});

emailInput.addEventListener("input", function () {
    validateEmail();
    successMessage.textContent = "";
});

passwordInput.addEventListener("input", function () {
    validatePassword();
    successMessage.textContent = "";
});

// Handle form submission
registrationForm.addEventListener("submit", function (event) {
    // Prevent the browser from submitting and reloading the page
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPasswordValid) {
        successMessage.textContent =
            "Form Submitted Successfully";

        // No page reload or actual server submission occurs.
    } else {
        successMessage.textContent = "";
    }
});
