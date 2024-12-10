// Login Form Validation and Storing Username
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basic validation
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    usernameError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    // Validate username
    if (!username) {
      usernameError.textContent = "Username cannot be empty.";
      isValid = false;
    }

    // Validate password
    if (
      !password ||
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      passwordError.textContent =
        "Password must be at least 8 characters long, include one uppercase letter and one number.";
      isValid = false;
    }

    // If validation passes, store username and redirect to the dashboard
    if (isValid) {
      // Store username in localStorage
      localStorage.setItem("username", username);

      // Redirect to dashboard page
      window.location.href = "dashboard.html"; // Redirect to dashboard
    }
  });

// Log out
function logout() {
  // Clear the username from localStorage
  localStorage.removeItem("username");

  // Redirect to the login page
  window.location.href = "index.html";
}

// Dashboard - Update welcome message with username from localStorage
document.addEventListener("DOMContentLoaded", function () {
  const username = localStorage.getItem("username");

  if (username) {
    document.getElementById(
      "welcomeMessage"
    ).textContent = `Welcome, ${username}!`;
  } else {
    document.getElementById("welcomeMessage").textContent = "Welcome, Guest!";
  }
});

// Add Task functionality
function showAlert() {
  const userInput = prompt("Enter Task:");
  if (userInput) {
    // Create the task list item
    const ul = document.getElementById("taskList");
    const li = document.createElement("li");
    li.classList.add("task");

    // Task header
    const taskHeader = document.createElement("h4");
    taskHeader.textContent = userInput;
    li.appendChild(taskHeader);

    // Task click toggle (strike-through)
    taskHeader.onclick = function () {
      li.classList.toggle("done");
    };

    // Category display and selection
    const categoryDisplay = document.createElement("h4");
    categoryDisplay.textContent = "(No Category)";
    li.appendChild(categoryDisplay);

    const categorySelect = document.createElement("select");
    const chooseCategoryOption = document.createElement("option");
    chooseCategoryOption.value = "";
    chooseCategoryOption.textContent = "Choose Category";
    chooseCategoryOption.disabled = true;
    categorySelect.appendChild(chooseCategoryOption);

    const indoorOption = document.createElement("option");
    indoorOption.value = "Indoor";
    indoorOption.textContent = "Indoor";
    categorySelect.appendChild(indoorOption);

    const outdoorOption = document.createElement("option");
    outdoorOption.value = "Outdoor";
    outdoorOption.textContent = "Outdoor";
    categorySelect.appendChild(outdoorOption);

    li.appendChild(categorySelect);

    categorySelect.onchange = function () {
      categoryDisplay.textContent = `(${categorySelect.value})`;
    };

    // Remove and change task text buttons
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = () => removeTask(li);
    removeButton.classList.add("red");
    li.appendChild(removeButton);

    const changeButton = document.createElement("button");
    changeButton.textContent = "Change Text";
    changeButton.onclick = () => changeTaskText(taskHeader);
    changeButton.classList.add("blue");
    li.appendChild(changeButton);

    // Add the task to the list
    ul.appendChild(li);
  }
}

function removeTask(li) {
  li.remove();
}

function changeTaskText(taskHeaderElement) {
  const newText = prompt("New Name:", taskHeaderElement.textContent);
  if (newText && newText !== taskHeaderElement.textContent) {
    taskHeaderElement.textContent = newText;
  }
}
