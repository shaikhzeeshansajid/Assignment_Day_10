function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();
  const taskList = document.getElementById("taskList");

  if (taskValue === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskValue;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function (e) {
    e.stopPropagation(); // Prevents toggle from triggering
    taskList.removeChild(li);
  };

  li.appendChild(deleteBtn);

  // Toggle completed on click
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  taskList.appendChild(li);
  taskInput.value = "";
}
