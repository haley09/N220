### Project Name

Final Project

### Github Link

https://haley09.github.io/N220/Final-Project

### Major Features

**Login Form**

- DOM References:
  - usernameInput: Input field for the username (document.getElementById("username")).
  - passwordInput: Input field for the password (document.getElementById("password")).
  - loginButton: Button to submit the login form (document.getElementById("login")).
- Logic:
  - Check if the username or password is empty.
  - Ensure the password is at least 8 characters long.
  - If all conditions are met, save the username in session storage and proceed to the dashboard.
- Code:

      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");
      const loginButton = document.getElementById("login");

      loginButton.addEventListener("click", () => {
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      if (!username || !password || password.length < 8) {
      alert("Invalid username or password!");
      return;
      }

      sessionStorage.setItem("username", username); // Save for the dashboard
      alert("Login successful!");
      // Redirect to the dashboard
      });

**Dashboard**

- DOM References:
  - welcomeMessage: Element to display the username (document.getElementById("welcomeMessage")).
  - taskList: Container for the list of tasks (document.getElementById("taskList")).
- Logic:
  - Display a personalized welcome message using the username from session storage.
  - Load existing tasks from local storage and display them.
- Code:

      const welcomeMessage = document.getElementById("welcomeMessage");
      const taskList = document.getElementById("taskList");

      const username = sessionStorage.getItem("username");
      welcomeMessage.textContent = `Welcome, ${username}!`;

      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

      tasks.forEach(task => {
      const taskElement = document.createElement("div");
      taskElement.textContent = task;
      taskList.appendChild(taskElement);
      });

**Task Manipulation**

- DOM References:
  - addTaskInput: Input field to type a new task (document.getElementById("addTask")).
  - addTaskButton: Button to add a new task (document.getElementById("addTaskButton")).
  - taskList: Container for dynamically added tasks (document.getElementById("taskList")).
- Logic:
  - Add tasks to the task list dynamically.
  - Save tasks in local storage.
  - Allow users to delete tasks from the list and update local storage.
- Code:

      const addTaskInput = document.getElementById("addTask");
      const addTaskButton = document.getElementById("addTaskButton");

      addTaskButton.addEventListener("click", () => {
      const task = addTaskInput.value.trim();
      if (!task) return;

      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));

      const taskElement = document.createElement("div");
      taskElement.textContent = task;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
      taskElement.remove();
      tasks.splice(tasks.indexOf(task), 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      });

      taskElement.appendChild(deleteButton);
      taskList.appendChild(taskElement);
      });
