
const form = document.getElementById("multiStepForm");

const steps = document.querySelectorAll(".step");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const stepIndicator = document.getElementById("step-indicator");
const summary = document.getElementById("summary");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");

let currentStep = 0;

// Show the current step
function showStep() {
    steps.forEach(function (step, index) {
        step.classList.toggle("active", index === currentStep);
    });

    stepIndicator.textContent = `Step ${currentStep + 1} of 3`;

    backButton.disabled = currentStep === 0;

    nextButton.textContent =
        currentStep === steps.length - 1 ? "Finish" : "Next";
}

// Validate the current step
function validateStep() {
    if (currentStep === 0) {
        const isValid = fullName.value.trim() !== "";

        document.getElementById("nameError").textContent =
            isValid ? "" : "Please enter your name.";

        return isValid;
    }

    if (currentStep === 1) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailPattern.test(email.value.trim());

        document.getElementById("emailError").textContent =
            isValid ? "" : "Please enter a valid email address.";

        return isValid;
    }

    if (currentStep === 2) {
        const isValid = password.value.length >= 6;

        document.getElementById("passwordError").textContent =
            isValid ? "" : "Password must contain at least 6 characters.";

        return isValid;
    }

    return false;
}

// Move to the next step or display summary
nextButton.addEventListener("click", function () {
    if (!validateStep()) {
        return;
    }

    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep();
    } else {
        form.hidden = true;
        stepIndicator.hidden = true;
        summary.hidden = false;

        document.getElementById("summaryName").textContent =
            "Name: " + fullName.value.trim();

        document.getElementById("summaryEmail").textContent =
            "Email: " + email.value.trim();
    }
});

// Return to the previous step
backButton.addEventListener("click", function () {
    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
});

// Clear validation error while correcting input
fullName.addEventListener("input", function () {
    document.getElementById("nameError").textContent = "";
});

email.addEventListener("input", function () {
    document.getElementById("emailError").textContent = "";
});

password.addEventListener("input", function () {
    document.getElementById("passwordError").textContent = "";
});

showStep();
