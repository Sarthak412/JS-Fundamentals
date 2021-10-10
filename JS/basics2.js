/*
----------------------------------------
    JavaScript Fundamentals Part-2
----------------------------------------
*/

/* Activating Strict Mode */

// To use strict mode in JS use "use strict at the start of the file"

"use strict"; 
 
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can drive.");  

// Outputs 'I can drive'

/*
--------------------------------------
        Functions in JavaScript
--------------------------------------

-> A function is a piece of code which we can reuse over and over again.
-> Function is created using "function" keyword.
   Syntax: 
           function <function_name>() {

           }
*/

// Example of a function

function sayHello(){
    console.log("Hello");
}

// this is known as calling / invoking / running the function. 
sayHello();

// if we call the function one more time it will run the inner code again

sayHello();

function juiceShop(oranges, apples){
    console.log(oranges, apples);
    const juice = `Juice made of ${oranges} oranges and ${apples} apples.`;
    return juice;
}

const finalProd = juiceShop(4, 5);
console.log(finalProd);

const secondProd = juiceShop(3, 5);
console.log(secondProd);

// Some more examples of functions

// Function for addition of two numbers
function twoSum(num1, num2){
    console.log(num1, num2);
    const sumOfTwo = num1 + num2;
    return sumOfTwo;
}

const finalSum =  twoSum(5, 5);
console.log(finalSum);


