const file_name = "tasks.json"
const fs = require('fs');
const rl = require('readline-sync')
// const rl = require('readline').createInterface(process.stdin, process.stdout);

// Always read file since it is always needed
let tasks = JSON.parse(fs.readFileSync( file_name ));

// selection 1
const showTasks = () => {
    console.log(tasks);
}

// selection 2
const addTask = () => {
    const new_task = rl.question("task name to be added :")

    if (tasks.hasOwnProperty(new_task)){
        console.log("Task %s is already exist and marked as %s!", new_task, tasks[new_task] ? "done" : "un-done")
    }
    else{
        tasks[new_task] = false;
        fs.writeFileSync(file_name, JSON.stringify(tasks));
    }
}

// selection 3
const deleteTask = () => {
    const task = rl.question("task name to be deleted :")
    delete tasks[task];
    fs.writeFileSync(file_name, JSON.stringify(tasks));
}

// selection 4
const markDone = () => {
    const task = rl.question("task name to be done :")
    if (tasks.hasOwnProperty(task))
    {
        tasks[task] = true;
        fs.writeFileSync(file_name, JSON.stringify(tasks));
    }
    else{
        console.log("Task %s is not exist!", task)
    }
}

const start_task_manager = () => {

    console.log("\n\n\
    Welcome to your task manager, Press:\n\
    1. to see all your tasks\n\
    2. to add a task\n\
    3. to delete a task\n\
    4. to mark a task as done\n\
    5. to Exit the task manager");

    const selection = rl.question("Selection :")

    if (selection == 5){
        console.log("Manager Terminated!")
    }
    else{
        if (selection == 1) {
            showTasks();
        }
        else if (selection == 2) {
            addTask();
        }
        else if (selection == 3) {
            deleteTask();
        }
        else if (selection == 4) {
            markDone();
        }
        else {
            console.log("invalid number!")
        }
        start_task_manager();
    }
}

start_task_manager();

// var a = 5;
// var b = "yasin"
// console.log('console log icinde degiskenimin degeri ' + a + ' dir diger degisken de '  + b + ' dir');
// console.log('console log icinde degiskenimin degeri %d dir diger degisken de %s dir', a,b);
// console.log(`console log icinde degiskenimin degeri ${a} dir diger degisken de ${b} dir`);