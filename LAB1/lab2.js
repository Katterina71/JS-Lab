
// Part 2

// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.
// Set up a program to answer the following questions:
// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?

//Create variable declarations
const tripdistanse = 1500; 

const mpg55 = 30;
const mpg60 = 28;
const mpg75 = 23;

const fuelcost = 3;
const budget = 175; 


//Display on html file:
const btn1 = document.getElementById('btn1');

// Calculate how much gasoline is required for each speed
const galused55mph = tripdistanse /mpg55; // 55 m/h
const galused60mph = tripdistanse /mpg60; // 60 m/h
const galused75mph = tripdistanse /mpg75; // 75 m.h

// Check - Calculate how much gasoline is required for each speed
console.log(Math.round(galused55mph) + " Gallons. Speed 55 miles per hour");
console.log(Math.round(galused60mph)+ " Gallons. Speed 60 miles per hour");
console.log(Math.round(galused75mph) + " Gallons. Speed 75 miles per hour");

// Spend money for trip depend on speed 
const budget55mph = galused55mph * fuelcost; // 55 m/h
const budget60mph = galused60mph * fuelcost; // 60 m/h
const budget75mph = galused75mph * fuelcost; // 75 m.h

// Check - Spend money for trip depend on speed
console.log(Math.round(budget55mph)+ "$ Budget. Speed 55 miles per hour");
console.log(Math.round(budget60mph)+ "$ Budget. Speed 60 miles per hour");
console.log(Math.round(budget75mph)+ "$ Budget. Speed 75 miles per hour");

//How long will the trip take, in hours
let hourspertrip55pmh = tripdistanse / 55;
let  hourspertrip60pmh = tripdistanse / 60;
let  hourspertrip75pmh = tripdistanse /75;

// Check - How long will the trip take, in hours
console.log(Math.round(hourspertrip55pmh)+ " Hours. Speed 55 miles per hour");
console.log(Math.round(hourspertrip60pmh)+ " Hours. Speed 60 miles per hour");
console.log(Math.round(hourspertrip75pmh)+  " Hours. Speed 75 miles per hour");


// Find the best speed solution for the trip

if (budget55mph <= budget && hourspertrip55pmh < hourspertrip60pmh && hourspertrip55pmh < hourspertrip75pmh) {
  console.log("The best speed is 55 m/h. It will take "+ Math.round(hourspertrip55pmh) + " hours and you spend " + Math.round(galused55mph) + " Gallons. Budget will be "+ Math.round(budget55mph) + "$." ); 
} else if (budget60mph <= budget && hourspertrip60pmh < hourspertrip55pmh) {
  console.log("The best speed is 60 m/h. It will take "+ Math.round(hourspertrip60pmh) + " hours and you spend " + Math.round(galused60mph) + " Gallons. Budget will be "+ Math.round(budget60mph) + "$." ); 
}
else {
  console.log("The best speed is 75 m/h. It will take "+ Math.round(hourspertrip75pmh) + " hours and you spend " + Math.round(galused75mph) + " Gallons. Budget will be "+ Math.round(budget75mph) + "$." );
}

// Display on index.html
function fun1 (){
  out1.innerHTML = txt1.value;
}

btn1.addEventListener('click', fun1);
console.log(1);
console.log(txt1);