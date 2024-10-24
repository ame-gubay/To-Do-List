document.getElementById("add-btn").addEventListener("click", addTask);

function addTask() {
    const input = document.getElementById("todo-input");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.innerText = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        taskItem.remove();
    };

    taskItem.appendChild(deleteBtn);
    taskItem.addEventListener("click", function() {
        taskItem.classList.toggle("completed");
    });

    document.getElementById("todo-list").appendChild(taskItem);
    input.value = ""; // Clear input field
}
