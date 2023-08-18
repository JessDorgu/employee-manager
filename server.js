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
        case "View All Employees":
          vEmpemp();
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
      else{console.table(results);
            questions();
      }
  });
}
}


function vRoles(){
  db.query("select * from role", function (err, results) {
  if (err){console.log('Error viewing table')} 
  else{console.table(results);
        questions();
}
  });
}

function vEmpemp(){
  db.query("select * from employee", function (err, results) {
  if (err){console.log('Error viewing table')} 
  else{console.table(results);
        questions();
}
  });

}

function aDept(){
  inquirer.prompt([
      {
          type: 'input',
          name: 'dept_name',
          message: 'Please Enter New Department Name:'
      }])
      .then(({dept_name}) => {
          db.query('insert into department (dept_name) values (?)', dept_name, function (err, results) {
              if (err) {console.log('Failed to add New Department')}
              else{
                 console.log("New Department Added"); 
                 questions();
              }})
      })        
}


function aRole(){

    const deptList = res.map((department) => ({
      name: department.dept_name,
      id: department.id,
    }));
  
  const rolequestions =[
    {type : "input",
    name : "title",
    message : "Please Enter Title of this Role:"
  },
  {type : "input",
  name : "salary",
  message : "Please Enter Salary for this Role:"
},
{type : "list",
name : "sdept",
message : "Please Enter Department of this Role:",
choices : deptList
}
  ]
  inquirer.prompt(rolequestions).then(({title,salary,sdept})=>{
    const sdeptId = deptList.find(
      (department) => department.name === sdept
    ).id;
      db.query('insert into role (title, salary, department_id) values(?,?,?)',[title, salary, sdeptId], function(err,res){
          if (err) {console.log('Error in adding Role')}
              else{
                 console.log('Added Successfully'); 
                 questions();
              }
      })             
  })
}

questions();
