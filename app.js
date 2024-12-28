// Select input, button, and display elements
const fullNameInput = document.getElementById("fullNameInput");
const submitBtn = document.getElementById("submitBtn");
const displayName = document.getElementById("displayName");

// Function to display full name
function displayFullName() {
    const fullName = fullNameInput.value.trim();

    if (fullName === "") {
        displayName.textContent = "Please enter your full name.";
        displayName.style.color = "red"; // Show an error message
    } else {
        displayName.textContent = `Ohhh! Haloo ${fullName}!`;
        displayName.style.color = "blue"; // Show success message
    }
}

// Add event listener to the button
submitBtn.addEventListener("click", displayFullName);

