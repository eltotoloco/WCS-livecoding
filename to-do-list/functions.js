
function refresh(){
    todoList.innerHTML ="";
    doneList.innerHTML="";
    for(let i = 0; i < taskList.length; i++){
        const task = taskList[i];
        const taskElement = createTask(task);
        if(task.isFinished){
            doneList.append(taskElement);
        }else{
            todoList.append(taskElement);
        }
    }
}


function createTask(task){
    const divContainer = document.createElement("div");
    const titleElement = document.createElement("h1");
    const descriptionElement = document.createElement("p");
    const doneButton = document.createElement("button");

    divContainer.classList.add("task")
    
    titleElement.innerHTML = task.title;
    descriptionElement.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    
    doneButton.innerHTML = "Done";
    doneButton.addEventListener('click', function(e){
        task.isFinished = true;
        refresh();
    });

    divContainer.append(titleElement);
    divContainer.append(descriptionElement);
    divContainer.append(doneButton);
    return divContainer;
}
