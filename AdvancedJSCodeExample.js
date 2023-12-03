/*
* Filename: AdvancedJSCodeExample.js
* Description: This code demonstrates a complex and sophisticated JavaScript implementation.
*/

// Define a class that represents a point in 2D space
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Get the distance between two points
  distanceTo(otherPoint) {
    const dx = this.x - otherPoint.x;
    const dy = this.y - otherPoint.y;

    return Math.sqrt(dx * dx + dy * dy);
  }
}

// Create an array of points
const points = [
  new Point(1, 2),
  new Point(3, 5),
  new Point(10, 12),
  new Point(-2, -7)
];

// Function to find the pair of closest points
function findClosestPair(points) {
  let minDistance = Infinity;
  let closestPair = null;

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const distance = points[i].distanceTo(points[j]);

      if (distance < minDistance) {
        minDistance = distance;
        closestPair = [points[i], points[j]];
      }
    }
  }

  return closestPair;
}

// Find the closest pair of points in the array
const closestPair = findClosestPair(points);

// Output the result
console.log("Closest pair of points:");
console.log(closestPair[0]);
console.log(closestPair[1]);

// Generate a random color in RGB format
function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

// Create a canvas element
const canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

// Get the rendering context
const ctx = canvas.getContext("2d");

// Draw a random rectangle on the canvas
function drawRandomRectangle() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const width = Math.random() * (canvas.width / 2);
  const height = Math.random() * (canvas.height / 2);
  const color = generateRandomColor();

  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

// Draw 100 random rectangles on the canvas
for (let i = 0; i < 100; i++) {
  drawRandomRectangle();
}

// Define a class to represent a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Get the person's name and age
  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Create an array of people
const people = [
  new Person("John", 25),
  new Person("Sarah", 30),
  new Person("Michael", 45),
  new Person("Emily", 21)
];

// Print the information of each person
people.forEach(person => {
  console.log(person.getInfo());
});

// Implement a custom sorting algorithm
function customSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// Sort an array of numbers using the custom sorting algorithm
const numbers = [5, 3, 7, 1, 9, 2];
const sortedNumbers = customSort(numbers);

console.log("Sorted numbers:");
console.log(sortedNumbers);

// ... (more code)
// More complex and elaborate code here
// ...

// End of file