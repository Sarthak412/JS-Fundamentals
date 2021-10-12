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


/*
---------------------------------------------
     Function Declarations vs Expressions
---------------------------------------------
*/

// Function declaration
function calcAge(birthYear){
    return 2021 - birthYear;
}

const age = calcAge(2000);
console.log(age);

// Expressions

const calcAge2 = function (birthYear) {   // Another way of declaring a function
    return 2021 - birthYear;     
}

const age2 = calcAge2(2000);
console.log(age, age2);       // outputs 21 21


// Arrow function

const calcAge3 = birthYear => 2021 - birthYear;   // Arrow function
const age3 = calcAge3(2000);  // capturing the value and storing it in a variable
console.log(age3);    // Displaying the output to the console

// Let's see one more example of arrow function

const yearsUntilRetirement = (birthYear, firstName) => {
    const age4 = 2021 - birthYear;
    const retirement = 55 - age4;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(2000, 'Sarthak'));
console.log(yearsUntilRetirement(2002, 'Mitesh'));


// Functions calling other functions 


const cutPieces = function (fruit){
    return fruit * 4;
}

const fruitProcessor = function (apples, oranges){

    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    
    const juice2 = `Juice made of ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
    return juice2;
}

console.log(fruitProcessor(2, 3));


// Reviewing functions 

// separate function to calculate age 
const yourAge = function(yourBirthYear) {
    return 2021 - yourBirthYear;
}

const ageToDrive = function (firstName, yourBirthYear){

    const your_Age = yourAge(yourBirthYear);

    // checking if he is underage using if/else block
    if(your_Age > 18){
        return `${firstName} you are ${your_Age} you can drive.`;
    }
    else{
        return `You are under 18 comeback when you are 18.`;
    }

}

console.log(ageToDrive('Sarthak', 2005));
console.log(ageToDrive('Aryan', 1999));

// Lets check example of all 3 types of functions

// 1st type: Function Declaration 

/*
    function <function_name> () {
        return statements;
    }
*/

function additionFunc(num_1, num_2) {  // declaring function additionFunc with parameters num_1 & num_2
    console.log(num_1, num_2);        // Logging both the values to the console          
    const finalSum = num_1 + num_2;  // Variable to store the sum of both parameters
    return finalSum;                // returning the final sum
}

/* Storing the function value in another variable */
const final_sum = additionFunc(15, 5);     
console.log(final_sum);    // Outputting final sum i.e. returns 20


// 2nd type: Function Expression 

/*
    const <variable_name> = function (parameters){
        return statements;
    };
*/

// storing the function value in a variable
const requiredAge = function (myAge){
    if(myAge > 18){
        return `Your age is ${myAge} you can drive.`;
    }
    else{
        return `Your age is ${myAge} you cannot drive.`;
    }    
}; 

const enteredAge = requiredAge(15);
console.log(enteredAge);


// 3rd type Arrow function
// Arrow function is mostly used for a quick one-line function.

/*
    const <function_name> = parameters => statements;
*/

const votingAge = myAge2 => myAge2 >= 18 ? `You can vote`:`You cannot vote`;


const finalVoting = votingAge(18);
console.log(finalVoting);

