let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    let title = document.getElementById("title").value.trim();
    let description = document.getElementById("description").value.trim();

    if (!title || !description) {
        alert("Please fill all fields");
        return;
    }

    let task = {
        id: Date.now(),
        title: title,
        description: description,
        completed: false,
        addedAt: new Date().toLocaleString(),
        completedAt: null
    };

    tasks.push(task);

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";

    saveTasks();
    renderTasks();
}

function toggleTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
            task.completedAt = task.completed ? new Date().toLocaleString() : null;
        }
        return task;
    });
    saveTasks();
    renderTasks();
}

function deleteTask(id) {
    if(!confirm("Are you sure you want to delete this task?"))return;
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

function editTask(id) {
    let task = tasks.find(t => t.id === id);
    let newTitle = prompt("Edit title:", task.title);
    let newDesc = prompt("Edit description:", task.description);

    if (!newTitle || !newDesc) return;

    task.title = newTitle;
    task.description = newDesc;
    saveTasks();
    renderTasks();
}

function renderTasks() {
    let tbody = document.getElementById("taskBody");
    tbody.innerHTML = "";

    tasks.forEach(task => {
        let tr = document.createElement("tr");
        tr.className = task.completed ? "completed" : "pending";

        tr.innerHTML =`<td>${task.title}</td>
            <td>${task.description}</td>
            <td>${task.addedAt}</td>
            <td>${task.completed ? task.completedAt : ""}</td>
            <td>
                <button class="complete-btn" onclick="toggleTask(${task.id})">
                    ${task.completed ? "Undo" : "Complete"}
                </button>
                <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </td>`;

        tbody.appendChild(tr);
    });
}

renderTasks();