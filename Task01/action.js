document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('to-do-form');
    const newTaskInput = document.getElementById('new-task');
    const toDoList = document.getElementById('to-do-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(newTaskInput.value);
        newTaskInput.value = '';
    });

    function addTask(task) {
        if (task === '') return;

        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            toDoList.removeChild(li);
        });

        li.appendChild(deleteButton);
        toDoList.appendChild(li);
    }
});
