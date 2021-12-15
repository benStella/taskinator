const taskName = document.querySelector("#task-name")
const taskType = document.querySelector("#task-type")
const tasksToDo = document.querySelector("#tasks-to-do")
const addTaskBtn = document.getElementById("save-task")

var taskId = 0

function createTask() {
    
    // create task
    const createTaskEl = document.createElement("li")
    // add a class to list element
    createTaskEl.className = "task-item"
    
    // create edit button
    const createTaskEditBtn = document.createElement("button")
    // add text to button
    createTaskEditBtn.innerText = "Edit"
    // add classes to edit button
    createTaskEditBtn.className = "btn edit-btn"
    
    createTaskEl.appendChild(createTaskEditBtn)
    
    
    
    
    
    
    // append task to page
    tasksToDo.appendChild(createTaskEl)
}


addTaskBtn.onclick = function() {
    createTask()
    taskId++
}