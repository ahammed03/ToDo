const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const totalTasksElement = document.getElementById('totalTasks');
const completedTasksElement = document.getElementById('completedTasks');
const remainingTasksElement = document.getElementById('remainingTasks');
const dummyElement=document.querySelector('.dummy');

let count = 0;
let completed = 0;
let remain = count - completed;

function updateTaskCounts() {
    totalTasksElement.textContent = count;
    completedTasksElement.textContent = completed;
    remainingTasksElement.textContent = remain;
}

addTaskButton.addEventListener('click', function () {
    if (taskInput.value !== '') {
        dummyElement.classList.add('hidden')
        const newContainer = document.createElement('div');
        newContainer.classList.add('task-box');

        const pTag = document.createElement('p');
        pTag.classList.add('task');
        pTag.textContent = taskInput.value;

        const addBtn = document.createElement('button');
        addBtn.classList.add('completed');
        addBtn.innerHTML = '&#x2713';

        const delBtn = document.createElement('button');
        delBtn.classList.add('remove');
        delBtn.innerHTML = '&#9249';

        newContainer.appendChild(pTag);
        newContainer.appendChild(addBtn);
        newContainer.appendChild(delBtn);

        const mainContainer = document.querySelector('.list');
        mainContainer.appendChild(newContainer);

        delBtn.addEventListener('click', function () {
            newContainer.remove();
            count--;
            remain--;
            updateTaskCounts();
        });

        let isGray = true;

        addBtn.addEventListener('click', function () {
            if (isGray) {
                pTag.style.backgroundColor = 'gray';
                addBtn.style.backgroundColor = 'gray';
                completed++;
                remain--;
                isGray = false;
            } else {
                pTag.style.backgroundColor = 'white';
                addBtn.style.backgroundColor = 'white';
                addBtn.style.color = 'green';
                completed--;
                remain++;
                isGray = true;
            }
            updateTaskCounts();
        });

        count++;
        remain++;
        updateTaskCounts();

        taskInput.value = ''; // Clear the input field
    }
});
