/*
-------------------------------------
  JavaScript Basic to Expert course
-------------------------------------  
*/

// Outputting Hello World

console.log("Hello World");

// Creating a variable x to store the string

let m = "JavaScript is Fun!!";

console.log(m);    // Ouputting the string stored in x

// Variables in JS

// Variables in JS can be declared using let, var and const keyword. For example

let x = 5;  // here variable x has the value 5

var y = 10; // here variable is declared using var keyword which contains value 10

const pi = 3.14;   // here variable pi has the const value 3.14

console.log(x);
console.log(y);
console.log(pi);
 
// using "console.log" will print the output in the browser console 

/*
  If you want to output this on a web page you should link the JS file with the HTML file.
  
  -> Create a html file and JS file in the same folder.
  -> Link the JS file at the end of the body tag using script tag,
     
     For example, 

     <script src="filename.js"> </script> 
     
     This creates a external JS file which is linked with the HTML file (External JS).        
*/


/* 
--------------------------------------------
             Values & Variables
--------------------------------------------             
  -> Conventional way of naming a variable
    
    -> Variable name should start with a letter, underscore or dollar sign ($).
    -> Variable name should not contain spaces.
    -> Variable name should not start with a number.
    -> Valid variable name example:
       
       let firstName = 'Roy';
       let last_Name = 'Halpert';
       let _age = 20;
       let $job = "Software engineer";

    -> Invalid ways of naming a variable:
      
       let first name = 'Sarah';
       let 5days = 10;

  -> These are some conventional ways of naming a variable.   

*/

/* 
  JavaScript Fundamentals Assignment

  1. Declare variables called 'country', 'continent' and 'population' and
     assign their values according to your own country (population in millions)
  2. Log their values to the console.

*/

// declaring variables

let country = "India";   
let continent = "Asia";
let population = "138 crore";

// Ouputting all the variable values to the Console using console.log()

console.log(country);
console.log(continent);
console.log(population);

/*
 
 * Comments in JavaScript
 * There are two types of comment in JS.
   -> Single-line comments.
   -> Multi-line comments.
 
 * Single-line comments start with two forward slashes '//'.
 * Multiline comments start with a forward slash follwed with a asterisk
   and end with asterisk followed with one forward slash.
   
*/



/**
-----------------------------------------
         Data Types in JavaScript
-----------------------------------------

* There are 7 primitive data types in JS.
   
   1] Number
   -> Number data type is used for storing integer values in a variable
      and floating point numbers is used for decimals.
      e.g. let age = 23;    

   2] String
   -> String is a sequence of characters. Used for storing text in a 
      variable.
      e.g. let firstName = "Naruto";

   3] Boolean
   -> Logical type that can only be true or false. Used for taking 
      decisions.
      e.g. let fullAge = true;
      
   4] Undefined
   -> Values taken by a variable that is not yet determined 
      ('empty values').
      e.g. let numbers;   // undefined

   5] Null
   -> Null also means "empty value".

   6] Symbol
   -> Symbol data type was introduced in ES2015. A symbol data type has a 
      unique value and cannot be changed.

   7] BigInt
   -> BigInt was introduced in ES2020. BigInt is used for storing larger 
      integers than the number type can hold.

*/

// Boolean Data type in JS

let jsIsFun = true;
console.log(jsIsFun);

// Using typeof in JavaScript to check the variable data types

console.log(typeof jsIsFun);    // Outputs boolean in the console 
console.log(typeof 23);         // Outputs number in the console
console.log(typeof 'Sasuke');   // Outputs string in the console

let age;

console.log(typeof age);     /*Outputs undefined as we have not 
                              initialized the variable with a value*/ 


