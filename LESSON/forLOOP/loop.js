// console.log('Loop Start');
// for (let i=0; i<10; i++) {
//     // console.log(i);
// } 
// // console.log('loop end');


// Count down from 10 to 1.
console.log('Count down from 10 to 1');
for (let countDown=10; countDown>=1; countDown-- ) {
    console.log(countDown);
}

// Output odd numbers from 1 to 10.
console.log('Output odd numbers from 1 to 10.');
for (let Odds=1; Odds<11; Odds+=2 ) {
    console.log(Odds);
}

// Output even number from 1 to 10.
console.log('Output even number from 1 to 10.');
for (let Evens=1; Evens<11; Evens++ ) {
    if (Evens%2 === 0 ) {
    console.log(Evens); }
}

// Output multiples of 3, starting at 6 and ending at 60.
console.log('Output multiples of 3, starting at 6 and ending at 60.');
for (let Multipl=6; Multipl<60; Multipl+=3 ) {
    console.log(Multipl);
}
// Output an increasing number of # symbols, from 1 to 7, as shown below.
console.log('Output an increasing number of # symbols, from 1 to 7, as shown below.');
for (let Symbol=1; Symbol<7; Symbol++ ) {
    console.log("#".repeat(Symbol));
}

console.log('Output an increasing number of # symbols, from 1 to 7, as shown below.');
for (let Symbol1="#"; Symbol1 !== "########"; Symbol1 +="#" ) {
    console.log(Symbol1);
}


// Now, write a for loop that iterates from 1 to 20. The loop should:

// Print “prime” for all prime numbers.
// Print “even” for all even numbers.
// Print “odd” for all odd numbers.
// Treat 2 as an even number and 1 & 3 as odd, rather than prime.

// // const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	// console.log(str[i]);
// }

//Forn ... in loop
// const str_in = "Hello World";

// for (const i in str_in) {
// 	console.log(str_in[i]);
// }

// const str_out = "Hello World";

// for (const c of str_out) {
// 	console.log(c);
// }

// The Continue Statement in For Loops
// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	if (str[i] == "l") {
// 		continue;
// 	}

// 	console.log(str[i]);
// }


// Write while loops to accomplish the following tasks:

// Count down to 0 from a given number.
console.log ('#1');
let num = 10;
while (num > 1) {
    num --
    console.log(num);
}

// Log integers in multiples of 3 as long as they are less than 35.
console.log ('#2');
let int = 1;
while (int<35) {
    int ++;

    if (int %3 === 0) {
        console.log(int);
        
    }
        
    }

// Print integers in multiples of 5 as long as they are less than 100.
console.log ('#3');

let int_5 = 1;
while (int_5<100) {
    int_5 ++;

    if (int_5 %5 === 0) {
        console.log(int_5); 
    }     
    }

    console.log ('#3-1');

    let i =5;
    while ( i <= 100) {
        console.log(i);
        i +=5;
    }
// Print integers between 0 and 20 with the following conditions:
// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.


console.log ('#4');
let num_a = 1;

while (num_a <20) {
    num_a ++;
    if (num_a % 2 === 0) {
        console.log(num_a, num_a *3);
        num_a *=3;
    }
}

// Vending Machine
console.log ('#5');
const costCookie = 4;
const bill = 10;
let quartersCoins = 0;
let quarterCost = 0.25;
let quartersSum = 0;

const changingMoney = bill - costCookie;

while (quartersSum<changingMoney) {
    quartersCoins++;
    quartersSum = quarterCost * quartersCoins;
}

console.log (quartersSum);
console.log (quartersCoins);
console.log (changingMoney);

//Write a while loop for the given output:
//  10, 30, 50, 70, 90
//  20, 40, 60, 80, 100

// - This could be acheived a few ways, be creative.


// Write a while loop that prints all numbers from 500 - 800 only if they are divisible by 4.

let numDecimal = 0;

while (numDecimal < 100 ) {
    numDecimal +=10;
    if (numDecimal % 20 === 0) {
        console.log("Even " + numDecimal);
    } else console.log("Odd " +numDecimal);
}

console.log ('#7');


let oddDecimal = 10;

while (oddDecimal <= 100 ) {
  console.log("Odd " + oddDecimal);
    oddDecimal += 20;

}

let evenDecimal = 20;

while (evenDecimal < 100 ) {
    console.log("Even " +evenDecimal);
    evenDecimal +=20;

}


let numByFour = 499;
while (numByFour < 800) {
    numByFour ++;
    if ( numByFour % 4 === 0) {
        console.log(numByFour);
    }
}