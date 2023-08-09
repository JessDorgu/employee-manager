const inquirer = require('inquirer');
const mysql = require('mysql2');
const table = require("console.table");

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "21Work!!",
    database : "employee_db"
}, console.log("connected jess"));



const questions = ()=> {
    return inquirer.prompt ([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices : [
                "View All Departments",
                "View All Roles",
                "View All Employees",
                "Add A Department",
                "Add A Role",
                "Add An Employee",
                "Update An Employee Role",
                "Quit"
            ],
        },
        
    ])

   .then((answer) => {
    switch (answer.action) {
        case "View All Departments":
          vDept();
          break;
        case "View All Roles":
          vRoles();
          break;
        case "View All Employee":
          vEmp();
          break;
          case "Add A Department":
          aDept();
          break;
          case "Add A Role":
            aRole();
          break;
          case "Add An Employee":
          aEmp();
          break;
          case "Update An Employee Role":
          upRole();
          break;
        case "Quit":
            db.end();
          break;
   }
});
    
function vDept(){
  db.query("select * from department", function (err, results) {
      if (err){console.log('Error viewing table')} 
      else{ console.table(results);
            questions();
      }
  });
}
}

// function vDept(){
//   db.query("select* from departments")
// };

// function vRoles(){
//   db.query("select * from role");
// };

// function vEmp(){
//   const query = "SELECT * FROM employee";
//   db.query(query,(err, results) => {
//     if (err) throw err;
//     console.log("All Employees:");
//     console.table(results);
//   questions();
// });
// }

questions();

console.log("restarting")