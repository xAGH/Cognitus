document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const taskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("tasks");
  const deleteCompletedTasksButton = document.getElementById(
    "deleteCompletedTaskButton"
  );
  const deleteCompletedTasksBtnByClass = document.getElementById(
    "deleteCompletedTaskButtonByClas"
  );

  function deleteTask(event) {
    const container = event.target.parentElement;
    const containerParent = container.parentElement;
    containerParent.removeChild(container);
  }

  taskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText == "") return;

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("container");
    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.textContent = "🗑";
    deleteTaskButton.addEventListener("click", deleteTask)
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskContainer.appendChild(taskItem);
    taskContainer.appendChild(deleteTaskButton);
    taskList.appendChild(taskContainer);
    taskInput.value = "";
  });

  taskList.addEventListener("click", (event) => {
    const taskItem = event.target;
    if (taskItem.tagName != "LI") return;
    taskItem.classList.toggle("completed");
  });

  deleteCompletedTasksButton.addEventListener("click", () => {
    const taskItems = Array.from(taskList.childNodes);
    const completeds = taskItems.filter((element) =>
      element.classList.contains("completed")
    );
    completeds.forEach((element) => {
      taskList.removeChild(element);
    });
  });

  deleteCompletedTasksBtnByClass.addEventListener("click", () => {
    const taskItems = Array.from(document.getElementsByClassName("completed"));
    taskItems.forEach((element) => {
      const parent = element.parentElement;
      parent.removeChild(element);
    });
  });
});
