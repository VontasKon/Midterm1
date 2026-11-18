
// Select the three Kanban columns
const pendingTasks = document.querySelector("#pendingTasks");
const inProgressTasks = document.querySelector("#inProgressTasks");
const completedTasks = document.querySelector("#completedTasks");


// load the tasks made in the tasks page
function loadTasks() {
    return JSON.parse(localStorage.getItem("campaignTasks")) || [];
}


//display tasks on the kanban board
function displayKanban() {

    //Clear all
    pendingTasks.innerHTML = "";
    inProgressTasks.innerHTML = "";
    completedTasks.innerHTML = "";


    const tasks = loadTasks();

    tasks.forEach(task => {

        const card = document.createElement("div");
        card.className = "card p-3 mb-2";


        const name = document.createElement("h5");
        name.textContent = task.name;


        const description = document.createElement("p");
        description.textContent = task.description;


        const details = document.createElement("p");
        details.textContent =
            "Due: " + (task.date || "No date") +
            " | " + task.priority + " Priority";

  
        card.append(name, description, details);


        // sort and display by their status
        if (task.status === "Pending") {
            pendingTasks.appendChild(card);
        } else if (task.status === "In Progress") {
            inProgressTasks.appendChild(card);
        } else if (task.status === "Completed") {
            completedTasks.appendChild(card);
        }
    });

    //awhat happens when there are no tasks
    if (pendingTasks.children.length === 0) {
        pendingTasks.textContent = "No pending tasks.";
    }
    if (inProgressTasks.children.length === 0) {
        inProgressTasks.textContent = "No tasks in progress.";
    }
    if (completedTasks.children.length === 0) {
        completedTasks.textContent = "No completed tasks.";
    }
}
displayKanban();
