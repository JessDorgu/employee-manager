const inquirer = require('inquirer');
const mysql = require('mysql2');


const db = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "21Work!!",
    database : "employee_db",
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
                "Quit",
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
})
    
};

questions();