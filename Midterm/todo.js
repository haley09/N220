//create variable that tracks list of todo items
let todoItems = [];

//create addItem function
function addItem() {
  const itemInput = document.getElementById("item");
  const itemValue = itemInput.value.trim();

  if (itemValue) {
    //add item to the todo list items
    todoItems.push(itemValue);
    updateList();
    itemInput.value = "";
  }
}

//update list
function updateList() {
  const listElement = document.getElementById("list");
  listElement.innerHTML = "";

  todoItems.forEach((item) => {
    listElement.innerHTML += `<li>${item}</li>`;
  });
}

//Summarize list
function summarizeList() {
  const summaryElement = document.getElementById("summary");
  let summaryText = `Total Items: ${todoItems.length}<br />`;

  if (todoItems.length > 0) {
    summaryText += `First Item: ${todoItems[0]}<br />`;
    summaryText += `Last Item: ${todoItems[todoItems.length - 1]}`;
  } else {
    summaryText += "First Item: <br /> Last Item: ";
  }

  summaryElement.innerHTML = summaryText;
}
