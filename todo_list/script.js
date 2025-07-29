document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            listItem.addEventListener('click', function() {
                listItem.classList.toggle('completed');
            });

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                listItem.remove();
            });
            listItem.appendChild(removeBtn);
            
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    });
});
