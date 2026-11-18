
// we first select all the html elements


const taskForm = document.querySelector("#taskForm");
const taskTable = document.querySelector("#taskTable");
const taskCount = document.querySelector("#taskCount");

const taskName = document.querySelector("#taskName");
const taskDescription = document.querySelector("#taskDescription");
const taskDate = document.querySelector("#taskDate");
const taskPriority = document.querySelector("#taskPriority");
const taskStatus = document.querySelector("#taskStatus");

const taskSearch = document.querySelector("#taskSearch");
const statusFilter = document.querySelector("#statusFilter");

const taskSubmitButton = document.querySelector("#taskSubmitButton");
const cancelEditButton = document.querySelector("#cancelEditButton");





// Load previously saved tasks, or start with an empty array if nothing was saved
let tasks = JSON.parse(localStorage.getItem("campaignTasks")) || []; 
// null means no task is being edited
let editingId = null;
function saveTasks() {
    localStorage.setItem("campaignTasks", JSON.stringify(tasks)); // save tasks in the browser.. use stringify to go from an array 
    // to a JSON string
}

//display the tasks inside the table

function displayTasks() {
//to sTART WITH A BLANK TABLE
    taskTable.innerHTML = "";

    //search input and selected status value, use lowercase so we dont have to deal with capital letters
    const search = taskSearch.value.toLowerCase();
    const filter = statusFilter.value; // get the status of the filter eg all tasks, pending, completed etc

    //only display tasks matching the search and filter.
    const filteredTasks = tasks.filter(task => //get the status  selected
        task.name.toLowerCase().includes(search) &&  //convert the name to lowercase (&& = logical AND) check wether the task name has the search tesk
        (filter === "All" || task.status === filter)  //if the filter is on ALL show taSk with every status otheriswise only what matches the filter
    );

    taskCount.textContent = filteredTasks.length + " tasks shown"; //counts how manytasks match the requirements and dsiplays them in a paragraph

    // Display a message when there are no tasks.
    if (filteredTasks.length === 0) {
        taskTable.innerHTML =
            '<tr><td colspan="7">No tasks to display.</td></tr>';
        return;
    }


    //create tasks rows and tabkes.
    filteredTasks.forEach((task, index) => { //code repeated for every task, task = current task its on, index = position in array

        const row = document.createElement("tr"); //create a row for task information

        //add the information.
        [index + 1, task.name, task.description, task.date, task.priority]
            .forEach(value => { //for every value above
                const cell = document.createElement("td"); //create a new cell
                cell.textContent = value; //put the current value in that cell
                row.appendChild(cell); //the cell is added to the current table row
            });


        //status menu
        const statusCell = document.createElement("td"); //make table cell for the status dropdown menu
        const select = document.createElement("select");   //creates the dropdown menu 

        select.className = "form-select"; //bootstrap styling

        ["Pending", "In Progress", "Completed"].forEach(status => { //create the 3 task statuses
            const option = document.createElement("option"); //
            option.value = status; //set the actual value of the option that will be read later
            option.textContent = status; //this is the value the user sees
            select.appendChild(option); //add this to the dropdown menu
        });

        select.value = task.status; //selects the current status
        // listen for changes to the dropdown
        select.addEventListener("change", function(){
            task.status = select.value;
            saveTasks();
            displayTasks();
        });
        statusCell.appendChild(select); //puts the dropdown inside the cell
        row.appendChild(statusCell); //add the cell to the task row


        //edit and Delete butons.
        const functionsCell = document.createElement("td"); //make the cell that houses the two buttons

        //edut button
        const editButton = document.createElement("button"); //create a new button
        editButton.textContent = "Edit"; //button text is "edit"
        editButton.className = "btn btn-warning btn-sm me-2"; //bootstrap styling

        // Listen for clicks on this particular Edit button.
        editButton.addEventListener("click", function() { //listen for clicks...
            taskName.value = task.name; //film the form with information from the selected task
            taskDescription.value = task.description;
            taskDate.value = task.date;
            taskPriority.value = task.priority;
            taskStatus.value = task.status;
            editingId = task.id; //store the id of the task being edited so we know which one to update later
            taskSubmitButton.textContent = "Save Changes"; // when in edit mode the add task button changes to save changes
            cancelEditButton.hidden = false; //the cancel edit button becomes visible
        });


        //DELETE button see edit button for comments
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "btn btn-danger btn-sm";
        deleteButton.addEventListener("click", function() {
            if (confirm("Are you sure you want to delete this task?")) {
                tasks = tasks.filter(t => t.id !== task.id);
                saveTasks();
                displayTasks();
            }
        });

        functionsCell.append(editButton, deleteButton); //add the buttons to the same table cell
        row.appendChild(functionsCell); //add the buttons to the tasks row

        taskTable.appendChild(row); // add to the main task table so it appears on the page
    });
}

///add and edit tasks this handles all the form inputs..

taskForm.addEventListener("submit", function(event) { //event listener listens for the add task button being clicked (you can also press enter)

    event.preventDefault(); //stop the browser default behavior, 
    //so the page does not refresh(this was done in the contact page as well)

    //similairly to the contact form whitespaces are removed
    taskName.value = taskName.value.trim(); 
    taskDescription.value = taskDescription.value.trim();
    if (taskName.value === "" || taskDescription.value === "") {
        alert("Please fill in all fields. Spaces alone are not accepted.");
        return;
    }

    //collecting the inputs
    const task = { //create an object that stores the following together. i read that objects can hold both variables and functions
        id: editingId || Date.now(), //date.now generates the ID when a new task is made, it uses system time
        name: taskName.value,
        description: taskDescription.value,
        date: taskDate.value,
        priority: taskPriority.value,
        status: taskStatus.value
    };

    //add a new task or update a ready one
    if (editingId === null) { //if you are not editing a task editingid is null so you create a new task object
        tasks.push(task); //add the new task object to our current tasks array
    } else { //if editing id has a proper value
        tasks = tasks.map(oldTask => //.map goes through the tasks in the array and makes a new one based on what we return
            //old task represents each task we have checked
            oldTask.id === editingId ? task : oldTask //if oldtask matches the editingid replace it with the updated one,
            //otherwise keep the old one
        );
    }
//Save
    saveTasks(); //tasks are saved 
    displayTasks(); //refresh the table

    // Reset the form.
    taskForm.reset(); //clear all form inputs
    editingId = null; //no task currently edited
    taskSubmitButton.textContent = "Add Task"; //change the submit button back to add task
    cancelEditButton.hidden = true; //hide the cancel edit button that appears when we are editing a task (see below)
});

//cancel edits
cancelEditButton.addEventListener("click", function() {
    taskForm.reset();
    editingId = null;
    taskSubmitButton.textContent = "Add Task";
    cancelEditButton.hidden = true;
});

//listen for changes to the search box and filter menu respectively
taskSearch.addEventListener("input", displayTasks);
statusFilter.addEventListener("change", displayTasks);

displayTasks();