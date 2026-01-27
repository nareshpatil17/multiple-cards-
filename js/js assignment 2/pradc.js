// console.log("hello sheriyansh coding school");
// 1. Basic Operators (Arithmetic, Assignment, Increment, Decrement,
// Comparison, Logical, Bitwise)
// 
// 
// 
//
// 
// 


// 2. Variable Hoisting in JavaScript

// Assignment - 29 Oct 1



// e. Write one sentence:
// What gets hoisted?
// What does not get hoisted fully?
// 3. Conditional Operators (if, else, else-if, ternary, switch)
// a. Take input using prompt for age.
// If age > 18 → log “Adult”.
// Else → log “Minor”.
// b. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”
// c. Create a variable city = “Bhopal”.
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”
// d. Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.
// e. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }
// Assignment - 29 Oct 2
// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.
// g. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”


// 1. Basic Operators (Arithmetic, Assignment, Increment, Decrement,
//  Comparison, Logical, Bitwise)
// arithmatic operator 

// console.log(10+5);
// console.log(10-5);
// console.log(10*5);
// console.log(10/5);
// console.log(10%5);
// console.log(10**5);


// assignment 

// let a = 10;
// console.log(a +=10);
// console.log(a -=10);
// console.log(a *=10);
// console.log(a /=10);
// console.log(a %=10);
// console.log(a **=10);

// increament operator in js 

// there is also two type of increament operator pre increament and post increament 

// let count = 10;
// console.log(count++);
// console.log(count);

// console.log(++count);
// console.log(count);

// decreament operator in js 
// there are the two type of pre decreament and post decreament 

// let count = 10;
// console.log(count--);
// console.log(count);

// console.log(--count);
// console.log(count);


// comparision operator in js 

// == , === , > , < , >= , <= 

// console.log(10==10);
// console.log(10=="10");
// console.log(10==="10");

// console.log(10>20);
// console.log(10<20);
// console.log(10>=20);
// console.log(10<=20);

// logical operator 
// let a = 10;
// let b = 20;

// console.log(a>=b && a<=b);

// console.log(a>=b || a<=b);

// console.log(!(a>=b));

// bitwise operator 

// console.log(4&5);
// console.log(4|5);
// console.log(4^5);
// console.log(4<<5);
// console.log(4>>5);

// a. Create two numbers a = 10 and b = 3.
// Perform and log: a + b, a - b, a * b, a / b, a % b.

// let a = 10;
// let b = 3;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// b. Write: let x = 5; x = x + 3;
// Now rewrite the same using +=.
// Do the same for -=, *=, /=.

// let x = 5;
// // console.log(x = x + 3);
// // console.log(x+=3);
// console.log(x-=3);
// console.log(x*=3);
// console.log(x/=3);

// c. let count = 5;
// Use count++ and log value before and after.
// Repeat for count–.

// let count = 5;
// console.log(count)
// count++;
// console.log(count);

// console.log(count);
// count--;
// console.log(count);

//  d. Compare two values: 5 == “5” and 5 === “5”.
// Observe difference.

// console.log(5 =="5");
// console.log(5 === "5"); 


// f. Try logical AND and OR:
// true && false
// true || false
// !(true)

// console.log(true && false);
// console.log(true || false);
// console.log(!(true));

// g. Predict the result of:
// (5 > 3 && 10 > 8),
// (5 > 3 || 10 < 8)

// console.log(5 > 3 && 10 > 8);
// console.log(5 > 3 || 10 < 8);

// h. Bitwise (light intro):
// Evaluate 5 & 1 and 5 | 1.
// Write result and your observation (no deep explanation needed now).

// console.log(4&5);
// console.log(4|5);

// variable hoisting in javascript 

// a. Predict output of:
// console.log(a);
// var a = 10



// console.log(a);
// var a = 10; // top of the coding var a;
// console.log(a);


// temporal zone in javascript (td zone)
// b. Predict output of:
// console.log(b);
// let b = 10




// console.log(b);

// let b = 10;

// console.log(b);


// console.log(a);
// const a = 10;
// console.log(a);

// c. Predict output of:
// test()
// function test() { console.log(“Hello”) }

// test();
// function test() { console.log("hello") }

// d. Try writing a function expression before initialization and call it:
// hello()
// var hello = function() { console.log(“Hi”) }
// Write what happened and why.

// hello()
// var hello = function(){
//     console.log("hello");
// }
// console.log(hello);
// hello();

