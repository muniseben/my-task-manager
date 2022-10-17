

console.log("Welcome to your task manager, Press: \n 1. to see all your tasks\n 2. to add a task\n 3. to delete a task\n 4. to mark a task as done\n 5. to Exit the task manager");

const file_name = "tasks.json" // json'i ilerde degistirirsek kolaylik olur diye file name degiskenine atadik./ string
const fs = require('fs');  // //js'nin kendi icinde external kutp var. Herh bir dosyadan acma, okuma, yazma yapmak icin. Dosya sist.(kutuphane)
const readline = require('readline');//terminalden line okuyan baska bir kutuphane.
var rl = readline.createInterface(process.stdin, process.stdout); // stdin = standart input // readline kutuphanesinin objesi demek ama bunu biz kendimiz belirledik

const showtasks = () => {
    fs.readFile( file_name , (err, data) => { //rf fonskuyonunun ikinci parametresi iki parametreli bi fonksyon biri err digeri file yani dosyanin icinde yazan tum data
        if (err) throw err;
        let tasks = JSON.parse(data); //jsondan okumus oldugum string veya array vya frkli bi data tipi
        console.log(tasks);
    });
}

const addtask= ()=> {
    var data = "";
    rl.question("task_name :",(task)=>{
        data = task;
    })
    console.log(data);

    fs.writeFile(file_name, JSON.stringify(data), err => {  // let data = JSON.stringify(student);
        if (err) throw err;
    });
}

// fs.writeFile("./customer.json", JSON.stringify(customer), err => {
//     if (err) console.log("Error writing file:", err);
//   });
////////////////////////////////////
// let data = JSON.stringify(student);

// fs.writeFile('student-3.json', data, (err) => {
//     if (err) throw err;
//     console.log('Data written to file');
// });

// console.log('This is after the write call');

const start_task_manager = () => {

    rl.question("selection :", //terminalde cikacak bir soru ve inputu gosteriyor.//onceden inputu html uzerinden aliyorduk simdi js uzerinden aldik. // burada iki parametre var ikinsisi fonksyonumz
    function(selection){ // (selection)=>{

        if (selection == 1){
            showtasks();
            start_task_manager(); //recursive function call, kendisini tekrar etmk.

        }
        else if (selection == 2){
            addtask();
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
            rl.close();
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
//     rl.close();

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
//key : value jsonla alakali



