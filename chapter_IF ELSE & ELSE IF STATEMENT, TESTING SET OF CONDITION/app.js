// Question 1
var input = prompt("Enter a character:");

if (!isNaN(input)) {
    alert("Input is a number");
} else if (input === input.toUpperCase()) {
    alert("Input is an uppercase letter");
} else if (input === input.toLowerCase()) {
    alert("Input is a lowercase letter");
} else {
    alert("Input is not a number or letter");
}

// Question 2
var num1 = parseInt(prompt("Enter first integer:"));
var num2 = parseInt(prompt("Enter second integer:"));

if (num1 > num2) {
    alert(num1 + " is larger");
} else if (num1 < num2) {
    alert(num2 + " is larger");
} else {
    alert("Both integers are equal");
}

// Question 3
var number = parseInt(prompt("Enter a number:"));

if (number > 0) {
    alert("Number is positive");
} else if (number < 0) {
    alert("Number is negative");
} else {
    alert("Number is zero");
}

//Question 4
var character = prompt("Enter a character:");

var vowels = "aeiouAEIOU";

if (vowels.includes(character)) {
    alert("True");
} else {
    alert("False");
}

// Question 5
var correctPassword = "12345";
var enteredPassword = prompt("Enter your password:");

if (!enteredPassword) {
    alert("Please enter your password");
} else if (enteredPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}

// Question 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// Question 7
var time = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm):"));

if (time >= 0 && time < 1200) {
    alert("Time is " + time + " = " + time + "am");
} 
