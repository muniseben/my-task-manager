

console.log("Welcome to your task manager, Press: \n 1. to see all your tasks\n 2. to add a task\n 3. to delete a task\n 4. to mark a task as done\n 5. to Exit the task manager");

const file_name = "tasks.json" // file name i ilerde degistirirsek kolaylik olur.
const fs = require('fs');
const readline = require('readline');
var user_input = readline.createInterface(process.stdin, process.stdout);

function see_your_tasks(){
    fs.readFile( file_name , function(err, file){
        if (err) throw err;
        let tasks = JSON.parse(file);
        console.log(tasks);
    });
}

// let data = JSON.stringify(student, null, 2);

// fs.writeFile('student-3.json', data, (err) => {
//     if (err) throw err;
//     console.log('Data written to file');
// });

// console.log('This is after the write call');


function start_task_manager(){

    user_input.question("selection :",
    function(selection){
        if (selection == 1){
            see_your_tasks();
            start_task_manager();

        }
        else if (selection == 2){
            console.log(2);
            start_task_manager();
        }

        else if (selection == 3){
            console.log(3);
            start_task_manager();
        }

        else if (selection == 4){
            console.log(4);
            start_task_manager();
        }

        else if (selection==5){
            user_input.close();
        }

        else {
            console.log("invalid number")
            start_task_manager();
        }
    });

}

start_task_manager();





// == esittir demek degil
// console.log(selection);
//     user_input.close();

//  if(3<5 && 1<3){
//     console.log("uc besten kucuktur");
//  }


//  function sub(a,b){
//     console.log("yasin");
//     return a + b;   // sonlandi demek
//     console.log("munis");
//  };
//  console.log(sub(8,7));

// function write2screen(x){
//     if(x == 5){
//         console.log("bom");
//         write2screen(5);
//     }
//     else{
//         console.log(x);
//     }
// }

// write2screen(5);
//key : value



