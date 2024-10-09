const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const taskList = document.getElementById('taskList');

renderTasks();

function renderTasks(tasksToShow) {
    console.log('renderTasks');
    taskList.innerHTML = '';
    (tasksToShow || tasks).forEach(task => {
        console.log(task);
        const taskNumber = tasks.indexOf(task);
        taskList.innerHTML  += `
            <li>
                <span class="status">
                    <input type="checkbox" ${task.status ? 'checked' : ''}>
                </span>
                <span class="name">${task.name}</span>
                <span>
                    <button>Редактировать</button>
                </span>
                <span>
                    <button onclick="deleteTask(${taskNumber})">Удалить</button>
                </span>
            </li>
        `});
}

function addTask() {
    const task = {
        name: document.getElementById('taskName').value,
        status: document.getElementById('taskStatus').checked
    };
    console.log('addTask', task)
    tasks.push(task);
    saveTasks();
    renderTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function filter() {
    const filterValue = document.getElementById('filter').value.trim().toLowerCase();
    console.log(filterValue);
    const tasksToShow = tasks.filter(
        task => task.name.toLowerCase().includes(filterValue));
    console.log(tasksToShow);
    renderTasks(tasksToShow);
}

function deleteTask(taskNumber) {
    console.log(taskNumber);
    tasks.splice(taskNumber, 1);
    saveTasks();
    renderTasks();
}