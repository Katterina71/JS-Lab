// Exercise
// Write a nested if...else statement.
// Declare a variable called num.
// Add an if...else statement that checks if num is positive & greater than 100.
// Add another statement that checks if num is positive but less than 100.
// Add a final statement to check if num is negative.

let num = 20;

if (num <= 5) {
    console.log ("You are a baby");
} 

else if ( num > 5 && num <=18) {
    console.log ("You are a teenager");
}

else {
    console.log ("You are a adult");
}



// Exercise
// Write an if..else statement for the following requirements:

// If a learner gets 90 or higher: console.log("A")
// If a learner get 80 or above: console.log("B")
// If a learner get 70 or above: console.log("C")
// If a learner get 55 or above: console.log("D")
// Any grade lower than 55: console.log("F")

let learner = 56; 

if (learner >= 90) {
    console.log("A");
}

else if (learner >= 80) {
    console.log("B");
}

else if (learner >= 70) {
    console.log("C");
}

else if (learner >= 55) {
    console.log("D");
}

else {
    console.log("F");
}