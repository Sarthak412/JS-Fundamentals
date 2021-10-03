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


/* 
  Dynamic typing in JavaScript
  -> Dynamic typing means changing the data type of a variable.
*/

// Example of Dynamic typing

/* 
 As we first initialized the 'jsIsFun' with a Boolean type to change
 the variable data type. We don't have to re-declare the variable, we
 can just access the variable name and change its type.      
*/

jsIsFun = 'It is fun';
console.log(typeof jsIsFun);

/**
 * let, const & var in JavaScript.
 * let, const & var are keywords to declare a variable
   
   Syntax - let <var_name> = <var_value>;
            const <var_name> = <var_value>;
            var <var_name> = <var_value>;     

 * let - let keyword is use to declare a variable inside the block. We can 
         access the value or re-assign new value by using the variable name.

         Example: let age = 24;
                  age = 25;         // Assigning new value 25 to the age variable
                  console.log(age); 

 * const - const keyword is also use to declare a variable and variables
           declared with const maintain constant values. In const, we can't
           re-assign a new value i.e. if we use const the variable is immutable.

           Example: const pi = 3.14;
                    console.log(pi); 

 * var - var keyword is similar to let keyword we can re-assign new values i.e.
         using var the variable is mutable.                
         
         Example: var firstName = 'Kakashi';
                  console.log(firstName);
                  firstName = 'Obito';     // assigning new string value
                  console.log(firstName);      

*/

// Examples of let, const and var 

let job_role = "DevOps engineer";

console.log(job_role);

job_role = "Security Architect";   // new job role assigned 

console.log(job_role);

// const example 

const birthYear = 2000;

console.log(birthYear);   // Outputs 2000

// birthYear = 2001;
// console.log(birthYear);

/* 
   If we try to assign new value it will through TypeError saying 
   assignment to constant.
*/

// var example

var fathersName = "Minato";

console.log(fathersName);

fathersName = "Jiraiya";  // var fathersName is changed to "Jiraiya"

console.log(fathersName);

/*
------------------------------------
       Basic Operators in JS
------------------------------------
-> Type of operators in JS:-
   
   -> Mathematical operator/ Arithmetic operator:
      
      Mathematical operator includes addition (+), subtraction (-),
      multiplication (*), division (/), modulus (%) and exponentiation 
      (**).

   -> Comparison operator:
      
      Comparison operator in JavaScript includes,
      
      ->  '==' equal to.
      ->  '===' equal value and equal type.
      ->  '!=' not equal.
      ->  '!==' not equal value or not equal type.
      ->  '>' greater than.
      ->  '<' less than.
      ->  '>=' greater than or equal to.
      ->  '<=' less than or equal to.

   -> Logical operator:
      
      Logical operator in JavaScript includes, 

      ->  '&&' logical and.
      ->  '||' logical or.
      ->  '!' logical not. 

   -> Assignment operator:

      Assignment operators assign values to JavaScript variables.

      ->  '=' single equal to use to assign value to a variable.
          e.g. let x = 10;
      
      ->  '+=' this assignment operator add a value to a variable.
          For e.g. let x = 10;
                   x += 10;
                   console.log(x);   // outputs 20

      ->  '-=' this assignment operator subtract a value from the variable.
          For e.g. let x = 10;
                   x -= 5;
                   console.log(x);   // outputs 5
                   
      ->  '*=' this assignment operator multiplies a value with the variable.
          For e.g. let x = 10;
                   x *= 5;
                   console.log(x);   // outputs 50
      
      ->  '/=' this assignment operator divides the value of the variable.
          For e.g. let x = 10;
                   x /= 5;
                   console.log(x);   // outputs 2

      ->  '%=' this assignment operator subtract a value from the variable.
          For e.g. let x = 10;
                   x %= 3;
                   console.log(x);   // outputs 1 i.e. returns remainder

*/


// Example of Arithmetic Operator

let num1 = 20;
let num2 = 20;

let sum = num1 + num2; // performing addition and storing the result in sum
let diff = num1 - num2; // performing subtraction and storing the result in diff
let product = num1 * num2; // performing multiplication
let quotient = num1 / num2; // performing division
let remainder = num1 % num2; // performing modulus operation

// Outputting all the results to the console
console.log(sum);       // returns 40
console.log(diff);      // returns 0
console.log(product);   // returns 400
console.log(quotient);  // returns 1
console.log(remainder); // return 0 

// Example of Comparison Operator

/* 
 Using if-statement and equal value and equal type operator to validate
 if both the strings are similar.
*/

const first_name = 'Hinata';

if (first_name === 'Hinata'){  
   console.log(true);
}     

// Using greater than operator to check which number is greater. 

let number1 = 10;
let number2 = 15;

if (number1 > number2){
   console.log(number1 +  ' is greater');   
}
else{
   console.log(number2 + ' is greater');
}

// Some more examples of comparison operators

let narutoAge = 22;
let hinataAge = 20;

if(narutoAge > hinataAge){
   console.log(true);
}

if(hinataAge <= 20){
   console.log(true);    // hinata's age is 20, 20 = 20 yes returns true.
}

console.log(hinataAge >= 25);  // returns false

// Examples of Logical Operator

// Logical AND '&'

let num_1 = 10;
let num_2 = 20;

/*
 In logical AND '&' if both the conditions are true then it proceeds
 to the next line or condition.  
*/

if (num_1 < num2 && num_1 < num_2){
   console.log('Both the conditions are true.');
}

// Logical OR '||'.

let k = 5;

/*
 In logical OR '||' if either one condition is true it proceeds to the
 next line or condition.
*/

if (k == 5 || k == 3){
   console.log("One condition is true.");
}

// Logical NOT '!'

let num_3 = 10;

/*
 In the below example, the condition evaluates to to true i.e.
 num_3 = 10 != 5 is true then it moves to the next condition. If the
 condition evaluates to false i.e. 10 != 10 is false so condition
 terminates.
*/

if(num_3 != 5){
   console.log("True. 10 is not equal to 5");
}

/* 
----------------------------------------
    Assignment operators in JavaScript
----------------------------------------
*/ 

let num_4 = 20;  // here '=' itself is a operator
let num_5 = 2;

console.log(num_4 += num_5);
console.log(num_4 -= num_5);
console.log(num_4 *= num_5);

let num_6 = 35;
let num_7 = 5;

console.log(num_6 /= num_7); // returns quotient 

let num_8 = 35;
console.log(num_8 %= 5); // returns remainder i.e. 0

// some more examples of assignment operator

let j = 20 + 5   // j is 25 now
j *= 2;          // multiplication operator
j++;         // increment operator j++ means j = j + 1
j--;         // decrement operator j-- means j = j - 1    
j--;         // Ouputs 59 as 61 - 2 = 59.
console.log(j+= 10);  // j += 10 means j = j + 10 i.e. 25 + 10 = 35 

// Exponentiation operator example

let expo = 2 ** 3;    // 2 ** 3 means 2 to the power of 3 = 8
console.log(expo);

// Concatenation operator '+'

let firstText = 'Hello';
let secText = 'how are you.';

console.log(firstText + ' ' + secText);

/*
---------------------------------------
           Operator Precedence
---------------------------------------
*/

// Example of operator precedence

console.log(5 + 5 * 3);

/*
 The precedence in the above code is multiplication first then addition
 i.e. multiplication has higher precedence than addition. But if we use
 parenthesis for addition in the above code addition will be performed
 first then multiplication. Check the below example:
*/

console.log((5 + 5) * 3); // returns 30 

/*
Here addition has higher precedence i.e. 5 + 5 = 10 then multiplication
10 * 3 = 30.
*/

// Operator Precedence

console.log(5 + 3 * 10 / 5);  // returns 11

/*
In the above example, division will be performed first i.e. 10/5 = 2,
then multiplication has second highest precedence in the above example
so 3 * 2 = 6. Then finally addition is performed i.e. 6 + 5 = 11.

Operators with higher precedence in order

1] Parenthesis/Brackets.
2] Exponentiation.
3] Division.
4] Multiplication. 
5] Addition.
6] Subtraction.

*/

console.log(2 ** 3 / 2);  // returns 4

/* 
here exponentiation is performed i.e. 2 ** 3 = 8 and 8 is divided by 2
which gives 4.
*/ 
