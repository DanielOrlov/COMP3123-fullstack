//TODO - Create Employee Module here and export to use in index.js

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]

function getAllEmployees() {
    return employees;
}

function getEmployeeById(id) {
    return employees.find(employee => employee.id === id);
}

function addEmployee(employee) {
    employees.push(employee);
}

function getEmployeeNames(){
    let names = employees.map(employee => `${employee.firstName} ${employee.lastName}`);
    return names;
}

function getEmployeeSalaries(){
    return employees.reduce((salaries, employee) => {
        salaries[employee.id] = employee.Salary;
        return salaries;
    }, {});
}

function getTotalSalary(){
    return employees.reduce((sum, employee) => sum + employee.Salary, 0);
}

module.exports = {
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    getEmployeeNames,
    getEmployeeSalaries,
    getTotalSalary
};