const taskNameInput = document.querySelector("#task-name")
const taskTypeInput = document.querySelector("#task-type")
const tasksToDo = document.querySelector("#tasks-to-do")
const addTaskBtn = document.getElementById("save-task")

// unique Id for tasks
var taskId = 0

// create and append task list element
function createTaskEl() {
    
    // create task list element 
    const taskList = document.createElement("li")
    // set task list attribute to current task id
    taskList.setAttribute("data-task-id", taskId)
    // set task list class name
    taskList.className = "task-item"
    // append task to page
    tasksToDo.appendChild(taskList)
    
    createTaskCardElements(taskList)
}

function createTaskCardElements(taskCardElements) {
    
    // create task name
    const taskHeader = document.createElement("h3")
    // set taskHeader text equal to taskNameInput value
    taskHeader.innerText = taskNameInput.value
    // append taskHeader to task
    taskCardElements.appendChild(taskHeader)
    
    // create task type
    const taskType = document.createElement("p")
    // set taskType text to taskTypeInput value
    taskType.innerText = taskTypeInput.value
    // append taskType to task
    taskCardElements.appendChild(taskType)
    
    // create and append edit button
    const taskEditBtn = document.createElement("button")
    taskEditBtn.innerText = "Edit"
    taskEditBtn.className = "btn edit-btn"
    taskCardElements.appendChild(taskEditBtn)
    
    // create and append delete button
    const taskDelBtn = document.createElement("button")
    taskDelBtn.innerText = "Delete"
    taskDelBtn.className = "btn delete-btn"
    taskCardElements.appendChild(taskDelBtn)

    // create and append dropdown menu
    const taskDropDown = document.createElement("select")
    taskDropDown.className = "select-dropdown"
    
    const taskDropDownOptions = ["Tasks To Do", "Tasks In Progress", "Tasks Completed"]
    for (let i = 0; i < taskDropDownOptions.length; i++){
        const taskDropDownOptionEl = document.createElement("option")
        taskDropDownOptionEl.textContent = taskDropDownOptions[i]

        taskDropDown.appendChild(taskDropDownOptionEl)
    }
    
     
    taskCardElements.appendChild(taskDropDown)
}


addTaskBtn.addEventListener("click", function() {
    createTaskEl()
    taskId++
})
