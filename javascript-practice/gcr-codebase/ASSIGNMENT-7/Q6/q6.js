
const searchInput = document.getElementById("searchInput");
const studentTable = document.getElementById("studentTable");
const noResults = document.getElementById("noResults");

const studentRows = studentTable.querySelectorAll("tbody tr");

// Filter table rows whenever the user types
searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.trim().toLowerCase();

    let visibleRows = 0;

    studentRows.forEach(function (row) {
        const rowText = row.textContent.toLowerCase();

        // Check whether the row contains the search text
        if (rowText.includes(searchText)) {
            row.hidden = false;
            visibleRows++;
        } else {
            row.hidden = true;
        }
    });

    // Show the message when no rows match
    noResults.hidden = visibleRows !== 0;
});
