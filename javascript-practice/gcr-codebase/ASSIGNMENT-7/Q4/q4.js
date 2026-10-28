
const themeButtons = document.querySelectorAll("button[data-theme]");
const themeStatus = document.getElementById("themeStatus");

// Apply the selected theme
function changeTheme(themeName) {
    // Save the selected theme as a class on the body
    document.body.setAttribute("class", `${themeName}-theme`);

    // Store the current theme in a custom HTML attribute
    document.body.setAttribute("data-theme", themeName);

    // Display the current theme
    themeStatus.textContent =
        `Current Theme: ${themeName.charAt(0).toUpperCase() + themeName.slice(1)}`;
}

// Handle clicks on all three theme buttons
themeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedTheme = button.getAttribute("data-theme");

        changeTheme(selectedTheme);
    });
});
