                // chapter : 10 
// Question no 1 :
var city = "Karachi";
if (city === "Karachi") {
    console.log("The City OF Lights");
}

// Question no 2 :
var x = 2;
var y =2 ;
if (x === y) {
    var z = prompt("Enter the value of z?");
}

console.log("the value of z is" + z)

//Question no 3 :
var zipcode= 10100;
if (zipcode==10100){
    alert("karachi")
}
else{
    alert("not karachi")
}

// Question no 4:
var x = 5; // Initial value of x

// Check if x has a particular numerical value
if (x === 5) {
    x = 10; // Assign a new value to x
}

console.log(x); // Output the value of x after the if statement

            //Chapter 11 (Comparison Operators)

// question no: 1 
if (variable1 !== variable2) {
     // Code block to execute if variable1 is not equal to variable2
     }

//  Question no: 2 
    if (variable1 >= variable2) {
        // Code block to execute if variable1 is greater than or equal to variable2
    }

// question no: 3
    if (variable !== particularNumber) {
        variable = assignedNumber;
    }

    // Question no :4 
    if (number !== differentNumber) {
        alert("Congratulations!");
    }
// Question no : 5 
    var firstName = prompt("Please enter your first name:");
if (firstName !== "AnotherName") {
    alert("Alert message for unequal name.");
}
             // Chapter 12 (if…else and else if statements)

// Question no:1 
if (variable1 >= variable2) {
    alert("Variable1 is greater than or equal to Variable2.");
} else {
    alert("Variable1 is less than Variable2.");
}

// Question no :2 
var marks = parseFloat(prompt("Enter your marks:"));

if (marks >= 90 && marks <= 100) {
    alert("Your grade is A.");
} else if (marks >= 80 && marks < 90) {
    alert("Your grade is B.");
} else if (marks >= 70 && marks < 80) {
    alert("Your grade is C.");
} else if (marks >= 60 && marks < 70) {
    alert("Your grade is D.");
} else if (marks < 60) {
    alert("Your grade is F.");
} else {
    alert("Invalid input.");
}

// Question no :3 
if (a === 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is " + a);
}

// Question no :4 
var city = prompt("Enter your city:");

if (city === "Karachi") {
    alert("Acknowledging it is Karachi.");
} else if (city === "Lahore") {
    alert("Acknowledging it's Lahore.");
} else {
    alert("It's neither Karachi nor Lahore.");
}

            //Chapter 13 (Testing sets of conditions)
// Question no:1
if (a === b && c === d) {
    // Code block to execute if both conditions are true
}

// Question no :2 
if (a === b || c !== d) {
    // Code block to execute if either or both conditions are true
}

// Question no :3 
if ((names === "Hamza" || names === "Arsalan") && age < 60) {
    // Code block to execute if both conditions are true
}

// Question no:4 
var firstVariable = 10;
var secondVariable = 20;

if (firstVariable < secondVariable || firstVariable > secondVariable) {
    alert("The first variable is either less than or greater than the second variable.");
}

// Question no :5 
var firstNameVariable = "John";
var lastNameVariable = "Doe";

var firstNameInput = prompt("Please enter your first name:");
var lastNameInput = prompt("Please enter your last name:");

if (firstNameInput === firstNameVariable && lastNameInput === lastNameVariable) {
    alert("Your first name and last name match the stored values.");
}

            // Chapter 14 (If statements nested)
// Question no :1 
var password = prompt("Enter your password:");

if (password !== "") {
    if (password.length <= 5) {
        alert("Password must be greater than 5.");
    } else {
        alert("OK");
    }
}
    
// Question no :2
if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}

// Question no :3 
var a = 1; 
var c = "Max"; 

if (a === 1 && c === "Max") {
    alert("OK");
}

// Question no :4 
var variable1 = 10;
var variable2 = 10;

if (variable1 === variable2) {
    if (variable1 <= variable2) {
        alert("Conditions passed!");
    }
}




            