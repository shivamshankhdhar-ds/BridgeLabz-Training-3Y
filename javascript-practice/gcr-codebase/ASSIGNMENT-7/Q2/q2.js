
const messageBox = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("reset");

const maxCharacters = 100;

// Update remaining characters and counter color
function updateCounter() {
    const remaining = maxCharacters - messageBox.value.length;

    counter.textContent = remaining;

    counter.classList.remove("normal", "warning", "danger");

    if (remaining === 0) {
        counter.classList.add("danger");
    } else if (remaining <= 20) {
        counter.classList.add("warning");
    } else {
        counter.classList.add("normal");
    }
}

// Prevent typing beyond 100 characters
messageBox.addEventListener("beforeinput", function (event) {
    if (!event.inputType.startsWith("insert")) {
        return;
    }

    const selectedLength =
        messageBox.selectionEnd - messageBox.selectionStart;

    const insertedLength = event.data === null
        ? 0
        : event.data.length;

    const newLength =
        messageBox.value.length - selectedLength + insertedLength;

    if (newLength > maxCharacters) {
        event.preventDefault();
    }
});

// Update counter whenever text changes
messageBox.addEventListener("input", updateCounter);

// Reset text and counter
resetButton.addEventListener("click", function () {
    messageBox.value = "";
    updateCounter();
});

// Initial counter
updateCounter();
