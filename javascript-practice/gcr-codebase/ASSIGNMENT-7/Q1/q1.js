
const productForm = document.getElementById("productForm");
const productInput = document.getElementById("productInput");
const productList = document.getElementById("productList");

let editingItem = null;

// Add a new product
productForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const productName = productInput.value.trim();

    if (productName === "") {
        return;
    }

    // Save the previous edit before adding a product
    saveEdit();

    const listItem = document.createElement("li");

    const nameSpan = document.createElement("span");
    nameSpan.className = "product-name";
    nameSpan.textContent = productName;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.dataset.action = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.dataset.action = "delete";

    listItem.append(nameSpan, editButton, deleteButton);
    productList.appendChild(listItem);

    productInput.value = "";
});

// Event delegation: one listener handles all Edit/Delete buttons
productList.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-action]");

    if (!button) {
        return;
    }

    const listItem = button.closest("li");

    if (button.dataset.action === "delete") {
        if (editingItem === listItem) {
            editingItem = null;
        }

        listItem.remove();
    }

    if (button.dataset.action === "edit") {
        saveEdit();

        const nameSpan = listItem.querySelector(".product-name");
        const editInput = document.createElement("input");

        editInput.className = "edit-input";
        editInput.value = nameSpan.textContent;

        nameSpan.replaceWith(editInput);

        editingItem = listItem;

        editInput.focus();
        editInput.select();
    }
});

// Save the edited product
function saveEdit() {
    if (!editingItem) {
        return;
    }

    const editInput = editingItem.querySelector(".edit-input");

    if (editInput) {
        const nameSpan = document.createElement("span");
        nameSpan.className = "product-name";

        // Keep the original name if the edited input is empty
        nameSpan.textContent =
            editInput.value.trim() || editInput.defaultValue;

        editInput.replaceWith(nameSpan);
    }

    editingItem = null;
}

// Auto-save when clicking outside the item being edited
document.addEventListener("click", function (event) {
    if (editingItem && !editingItem.contains(event.target)) {
        saveEdit();
    }
});

// Press Enter to save or Escape to cancel
document.addEventListener("keydown", function (event) {
    if (!editingItem || !event.target.classList.contains("edit-input")) {
        return;
    }

    if (event.key === "Enter") {
        event.preventDefault();
        saveEdit();
    }

    if (event.key === "Escape") {
        const editInput = event.target;
        const nameSpan = document.createElement("span");

        nameSpan.className = "product-name";
        nameSpan.textContent = editInput.defaultValue;

        editInput.replaceWith(nameSpan);
        editingItem = null;
    }
});
