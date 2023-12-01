// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add an event listener to the "Add Task" button
addTaskBtn.addEventListener("click", addTask);

// Function to create a delete button
function createDeleteButton(taskItem) {
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    // Remove the task item when the delete button is clicked
    taskList.removeChild(taskItem);
  });
  return deleteBtn;
}

// Function to add a task
function addTask() {
  // Get the trimmed value of the task input
  const taskText = taskInput.value.trim();

  // Check if the task text is empty
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create a new list item element
  const taskItem = document.createElement("li");
  taskItem.className = "taskItem";

  // Create a span element for the task text and set its content
  const taskTextElement = document.createElement("span");
  taskTextElement.textContent = taskText;

  // Append the task text span to the list item
  taskItem.appendChild(taskTextElement);

  // Create a delete button next to the list item
  const deleteBtnNextToItem = createDeleteButton(taskItem);
  deleteBtnNextToItem.className = "deleteBtnNextToItem";
  taskItem.appendChild(deleteBtnNextToItem);

  // Append the list item to the task list
  taskList.appendChild(taskItem);

  // Clear the input field after adding the task
  taskInput.value = "";
}
