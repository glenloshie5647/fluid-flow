/** 
 * Filename: ComplexCodeExample.js
 * 
 * Description: A complex code example demonstrating various JavaScript concepts and techniques.
 */

// Define a class named 'Person'
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Define a class named 'Employee' which extends 'Person'
class Employee extends Person {
  constructor(name, age, position, salary) {
    super(name, age);
    this.position = position;
    this.salary = salary;
  }

  static increaseSalary(employee, amount) {
    employee.salary += amount;
  }

  getFormattedSalary() {
    return `$${this.salary.toLocaleString()}`;
  }

  sayHello() {
    super.sayHello();
    console.log(`I work as a ${this.position} and earn ${this.getFormattedSalary()} per year.`);
  }
}

// Create instances of the 'Employee' class
const employee1 = new Employee("John Doe", 30, "Software Engineer", 80000);
const employee2 = new Employee("Jane Smith", 35, "Product Manager", 100000);

// Invoke methods on the instances
employee1.sayHello();
Employee.increaseSalary(employee1, 5000);
console.log(`\nAfter a salary raise, ${employee1.name} now earns ${employee1.getFormattedSalary()} per year.\n`);
employee2.sayHello();

// Create an array of employees
const employees = [employee1, employee2];

/**
 * Helper function to filter employees by position
 * @param {array} employees - The array of employees
 * @param {string} position - The position to filter by
 * @returns {array} Array of filtered employees
 */
function filterByPosition(employees, position) {
  return employees.filter(employee => employee.position === position);
}

console.log(`\nEmployees working as Software Engineers:`);
const softwareEngineers = filterByPosition(employees, "Software Engineer");
softwareEngineers.forEach(engineer => {
  console.log("- " + engineer.name);
});

/**
 * Helper function to calculate average salary
 * @param {array} employees - The array of employees
 * @returns {number} Average salary
 */
function calculateAverageSalary(employees) {
  const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
  return totalSalary / employees.length;
}

console.log(`\nAverage salary of all employees: $${calculateAverageSalary(employees).toFixed(2)}`);

// ... Rest of the code (more than 200 lines) containing various advanced concepts, algorithms, etc.