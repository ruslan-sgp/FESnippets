const tasks = [];

task = {}
task.description = 'Погулять';

tasks.push(task);

const taskList = document.querySelector('.taskList');

const taskDiv = document.createElement('div');
taskDiv.innerText = task.description;
taskList.appendChild(taskDiv);