// Select input, button, and display elements
const fullNameInput = document.getElementById("fullNameInput");
const submitBtn = document.getElementById("submitBtn");
const displayName = document.getElementById("displayName");

// function to display full name
function displayFullName() {
    const fullName = fullNameInput.value.trim();

    if (fullName === "") {
        displayName.textContent = "Please enter your full name.";
        // Show error message
        displayName.style.color = "orange"; 
    } else {
        displayName.textContent = `Welcome >3< : , ${fullName}!`;
        // Show success message
        displayName.style.color = "blue"; 
    }
}

submitBtn.addEventListener("click", displayFullName);
// optional
fullNameInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        displayFullName();
    }
});
