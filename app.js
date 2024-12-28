// Select input, button, and task list elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const listItem = document.createElement("li");

    // Add task text
    listItem.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");

    // Add event listener to delete button
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(listItem);
    });

    // Add functionality to mark tasks as complete
    listItem.addEventListener("click", () => {
        listItem.classList.toggle("completed");
    });

    // Append delete button to list item
    listItem.appendChild(deleteBtn);

    // Append list item to task list
    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = "";
}

// Add event listener to Add Task button
addTaskBtn.addEventListener("click", addTask);

// Optional: Allow pressing Enter to add tasks
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
