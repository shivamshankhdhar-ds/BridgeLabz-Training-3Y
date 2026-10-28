
const dropdown = document.getElementById("customDropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");
const selectedValue = document.getElementById("selectedValue");

// Open or close the dropdown
dropdownButton.addEventListener("click", function () {
    const isOpen = dropdownOptions.classList.contains("open");

    dropdownOptions.classList.toggle("open", !isOpen);
    dropdownButton.setAttribute("aria-expanded", String(!isOpen));
});

// Handle option selection
dropdownOptions.addEventListener("click", function (event) {
    const selectedOption = event.target.closest(".option");

    if (!selectedOption) {
        return;
    }

    const courseName = selectedOption.dataset.value;

    // Update button text and selected value
    dropdownButton.textContent = courseName + " \u25BE";
    selectedValue.textContent = "Selected course: " + courseName;

    // Close dropdown after selection
    dropdownOptions.classList.remove("open");
    dropdownButton.setAttribute("aria-expanded", "false");
});

// Close dropdown when clicking outside — capturing phase
document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
        dropdownOptions.classList.remove("open");
        dropdownButton.setAttribute("aria-expanded", "false");
    }
}, true);
