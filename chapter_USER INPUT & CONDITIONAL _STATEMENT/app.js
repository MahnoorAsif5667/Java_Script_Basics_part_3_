// Question no :1 
var city = prompt("Enter city name:");

if (city.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights");
}

//Question no :2
var gender = prompt("Enter your gender (male/female):");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
}


//Question no :3
var color = prompt("Enter color of road traffic signal:");

switch(color.toLowerCase()) {
    case "red":
        alert("Must Stop");
        break;
    case "yellow":
        alert("Ready to move");
        break;
    case "green":
        alert("Move now");
        break;
    default:
        alert("Invalid color");
}

//Question no :4 
var fuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"));

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

//Question no :5 
// Part a
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
// Output: The alert message "given condition for variable a is true" will be displayed.

// Part b
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}
// Output: No alert message will be displayed.

// Part c
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}
/* 
Output: 
"condition 2 is true" and "condition 4 is true" will be displayed.
*/

// Part d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
// Output: The alert message "The cost equals" will be displayed.

// Part e
if (true){
    alert("True");
}
if (false){
    alert("False");
}
// Output: Only "True" will be displayed.

// Part f
if("car" < "cat"){
    alert("car is smaller than cat");
}
// Output: "car is smaller than cat" will be displayed.

//Question no :6 

// Guess game
// Store secret number
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt user to guess the number
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check user's guess
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry, try again!");
}

// Question no :8 
// Check if a number is divisible by 3
var number = parseInt(prompt("Enter a number:"));

if (number % 3 === 0) {
    alert("The number is divisible by 3.");
} else {
    alert("The number is not divisible by 3.");
}

// Question no :9 
//Check if a number is even or odd
var number = parseInt(prompt("Enter a number:"));

if (number % 2 === 0) {
    alert("The number is even.");
} else {
    alert("The number is odd.");
}

// Question no :10 
// Check temperature
var temperature = parseFloat(prompt("Enter the temperature:"));

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It's freezing outside!");
}

// Question no :11
// Calculator
var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;

if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    result = firstNumber / secondNumber;
} else if (operation === "%") {
    result = firstNumber % secondNumber;
} else {
    alert("Invalid operation!");
}

alert("Result: " + result);
