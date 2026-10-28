
const gallery = document.getElementById("gallery");
const imageModal = document.getElementById("imageModal");
const modalContent = document.getElementById("modalContent");
const modalImage = document.getElementById("modalImage");
const closeButton = document.getElementById("closeButton");

// Open the modal when a gallery image is clicked
gallery.addEventListener("click", function (event) {
    const clickedImage = event.target.closest("img");

    if (!clickedImage) {
        return;
    }

    // Display the clicked image in the modal
    modalImage.src = clickedImage.src;
    modalImage.alt = clickedImage.alt;

    imageModal.classList.add("open");
});

// Close modal when clicking the dark background
imageModal.addEventListener("click", function () {
    closeModal();
});

// Prevent clicks inside the modal from closing it
modalContent.addEventListener("click", function (event) {
    event.stopPropagation();
});

// Close modal using the close button
closeButton.addEventListener("click", function (event) {
    event.stopPropagation();
    closeModal();
});

// Function to close and reset the modal
function closeModal() {
    imageModal.classList.remove("open");
    modalImage.src = "";
}
