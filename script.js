let taskIdCounter = 1;

window.onload = function () {
    const input = document.querySelector("#taskInput");
    const addButton = document.querySelector("#addBtn");
    const taskContainer = document.querySelector("#tasks");
    const emptyMessage = document.querySelector("#emptyMessage");

    function updateEmptyMessage() {
        const tasks = taskContainer.querySelectorAll('.task');
        if (tasks.length === 0) {
            emptyMessage.style.display = 'block';
        } else {
            emptyMessage.style.display = 'none';
        }
    }

    function addTask() {
        if (input.value.trim() === "") {
            alert("Please enter a task!");
            return;
        }

        // Create task element
        const task = document.createElement("div");
        task.classList.add("task");
        task.dataset.id = taskIdCounter++;

        task.innerHTML = `
            <span class="taskname">${input.value.trim()}</span>
            <button class="delete" onclick="deleteTask(this)">
                <i data-lucide="trash-2"></i>
            </button>
        `;

        // Hide empty message and add task
        emptyMessage.style.display = 'none';
        taskContainer.appendChild(task);

        // Initialize Lucide icons for the new task
        lucide.createIcons();

        // Clear input
        input.value = "";
        updateEmptyMessage();
    }

    // Global function for delete button onclick
    window.deleteTask = function(button) {
        const task = button.closest('.task');
        task.remove();
        updateEmptyMessage();
    };

    // Add event listeners
    addButton.addEventListener('click', addTask);
    
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Initialize empty message state
    updateEmptyMessage();
};
