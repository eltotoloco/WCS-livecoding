const taskList = [];

const form = document.getElementById('new-task');
const todoList = document.getElementById("todo-list");
const doneList = document.getElementById("done-list");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const title = document.getElementById('new-task-title').value; 
    const description = document.getElementById('new-task-desc').value;
    const task = {
        title: title,
        description: description,
        isFinished: false
    };
    taskList.push(task);
    refresh();
    form.reset();
});

function refresh() {
    todoList.innerHTML = "";
    doneList.innerHTML = "";
    for (let i = 0; i < taskList.length; i++) {
        const task = taskList[i];
        const taskElement = createTask(task);
        if (task.isFinished) {
            doneList.append(taskElement);
        } else {
            todoList.append(taskElement);
        }
    }
}


function createTask(task) {
    const divContainer = document.createElement("div"); // <div> </div>
    const titleElement = document.createElement("h1");// <h1> </h1>
    const descriptionElement = document.createElement("p");

    divContainer.classList.add("task"); // <div class="task">

    titleElement.innerHTML = task.title;
    descriptionElement.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


    divContainer.append(titleElement); // <div class="task"> <h1> </h1> </div>
    divContainer.append(descriptionElement);// <div class="task"> <h1> </h1> <p> </p></div>
    if (!task.isFinished) {
        const doneButton = document.createElement("button");
        doneButton.innerHTML = "Done";
        doneButton.addEventListener('click', function (e) {
            task.isFinished = true;
            refresh();
        });
        divContainer.append(doneButton);
    }
    return divContainer;
}
