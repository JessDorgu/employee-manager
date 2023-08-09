INSERT INTO department (dept_name)
VALUES ("C-Suite"),
       ("Home Office");

INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 2000000, 1),
       ("VP", 1500000,1),
       ("HR Manager", 70000,2),
       ("CFO", 1000000, 1),
       ("Lead Engineer", 120000,2),
       ("HR Rep", 50000,2);


INSERT INTO employee (first_name, last_name, role_id, manager_id )
VALUES ("Jessica", "Coble", 1, null),
       ("Aries", "Young", 2,1),
       ("Matt", "Pierce",3,null),
       ("Erin", "Holmes", 4,1),
       ("Nicole", "Smith", 5,null),
       ("Henry", "Gibson", 5,4),
       ("Brady", "Reeds", 6,3);