const os = require('os');
const path = require('path');
const fs = require('fs');
const http = require('http');
//TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");

const Employee = require('./Employee.js');

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const SERVER_PORT = 3000;
const SERVER_HOST = 'localhost';

//const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    console.log(req.method, req.url)
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<h1> Welcome to Lab Exercise 03</h1>');
        } else if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            const employees = Employee.getAllEmployees();
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify(employees));
        } else if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            const employeeNames = Employee.getEmployeeNames().sort();
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify(employeeNames));
        } else if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            const totalSalary = Employee.getTotalSalary();
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify({total_salary : totalSalary}));
    }
    }
})

server.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
});