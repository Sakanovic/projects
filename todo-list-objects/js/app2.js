var inputText = document.getElementById("new-task");
var addButton = document.getElementById("add-button");
var incompleteTasks = document.getElementById("incomplete-tasks");
var completedTasks = document.getElementById("completed-tasks");

var crossTask = function () {
  var listItem = this.parentNode;
  completedTasks.appendChild(listItem);
  this.onchange = uncrossTask;
}

var uncrossTask = function () {
  var listItem = this.parentNode;
  incompleteTasks.appendChild(listItem);
  this.onchange = crossTask;
}

var editTask = function () {
  var listItem = this.parentNode;
  var label = listItem.querySelector("label");
  var editInput = listItem.querySelector("input[type=text]");

  if (listItem.classList.contains("editMode")) {
    var value = editInput.value;
    label.innerText = value;
  } else {
    editInput.value = label.innerText;
    listItem.classList.toggle("editMode");
	}
}

var deleteTask = function () {
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
}

var bindEvents = function (listItem, checkboxFunction) {
  var checkBox = listItem.querySelector("input[type=checkbox]");
  var editButton = listItem.querySelector("button.edit");
  var deleteButton = listItem.querySelector("button.delete");

  checkBox.onchange = checkboxFunction;
  editButton.onclick = editTask;
  deleteButton.onclick = deleteTask;
}

for (var i = 0; i < incompleteTasks.children.length; i++) {
  bindEvents(incompleteTasks.children[i], crossTask);
}

for (var i = 0; i < completedTasks.children.length; i++) {
  bindEvents(completedTasks.children[i], uncrossTask);
}

addButton.addEventListener("click", function () {
  if(inputText.value != "") {
    var newListItem = document.createElement("li");

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    var label = document.createElement("label");
    label.textContent = inputText.value;

    var inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = inputText.value;

    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit");

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");

    newListItem.appendChild(checkBox);
    newListItem.appendChild(label);
    newListItem.appendChild(inputField);
    newListItem.appendChild(editButton);
    newListItem.appendChild(deleteButton);

    incompleteTasks.appendChild(newListItem);
    inputText.value = "";
    bindEvents(newListItem, crossTask);
  }
});