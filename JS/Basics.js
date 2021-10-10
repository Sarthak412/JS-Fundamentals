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


/*
--------------------------------------
     Strings and Template Literals
--------------------------------------
*/

// Example of Strings in Javascript 

const firstname = 'Gojo';
const job = 'Sorcerer';
const birth_year = 2000;
const year = 2021;

const pData = "I'm " + firstname + ", a " + (year - birth_year) + " year old " +
job;

console.log(pData);     // Outputs "I'm Gojo a 21 year old sorcerer".

// Template Literals in JavaScript

/*
 -> In JS, if we use backtick JS will understand that we are trying to 
 write template string. 
 -> Using Template string it becomes easy to write and manage string.    
*/

// Template string for above example

const newpData = `I'm ${firstname}, a ${year - birth_year} year old ${job}.`;
console.log(newpData);

// Multi-line strings in JavaScript
// To go on the next line we use '\n\' in JavaScript.
// But this method makes the code hard to read and understand.

console.log("String with \n\
multiple \n\
lines in JS.");

// So we can use the backtick to write a multi-line string. For example,

console.log(`This is 
a multi-line
string in JavaScript 
using template literal.`);


/*
------------------------------------------
   Taking Decisions: if/else statements 
------------------------------------------
   -> if/else statements in JavaScript are used to check a certain 
      condition.
   -> If a condition evaluates to true print the block inside the if 
      part and if the condition evaluates to false the block inside the 
      else part is executed.
*/

// Example of if/else statement in JavaScript

const my_age = 20;
/* 
You don't have to create a boolean variable you can just write the
condition i.e.

   if(my_age >= 18){
      ---||---
   }
   else{
      ---||---
   }

*/ 
const requiredAge = my_age >= 18; 

if(requiredAge){
   console.log(`You are over 18 you can drive 🚗.`)
}
else{
   const yearsLeft = 18 - my_age;
   console.log(`You are underage comeback after ${yearsLeft} years.`);
}

// One more example of If/else statement

let my_birthYear = 2000;

let century;

if(my_birthYear <= 2000){
   century = 20;
}
else{
   century = 21;
}

console.log(`You are from ${century} century.`);


/*
-----------------------------------------------
             Type Conversion & Coercion
-----------------------------------------------

* Type conversion - Type conversion in JS means transfer of data from
  one type to another.

* Type coercion - Type coercion refers to the process of automatic or
  implicit conversion of values from one data type to another.

*/

// Example of type conversion

const inputYear = '2000';   // Initialized as a string

/* 
Type conversion is done using the Number function i.e. string is converted
to number.
*/

console.log(Number(inputYear), inputYear); 
// Outputs 2000 & '2000' i.e. one is a number & other is a string
// which is inside the single quotes

console.log(inputYear + 5); 

/*
   Outputs 20005 because the main variable i.e. inputYear is still a
   string.
   So if you want to perform the '+' operation you have to convert
   the string into number. For example, check the below code -   
*/

console.log(Number(inputYear) + 5);   

/*
 Outputs 2005 as we converted the type from string to number using 
 'Number()' function.
*/

// Lets try to convert a string to a number.

console.log(Number('Naruto')); 

// Outputs 'NaN' which means Not a number

// Lets try to convert a number to a string.

console.log(String(23), 23);
// '23' 23
// Outputs string value in white and number in purple

// Example of type coercion 

console.log("I'm a " + 20 + " year old developer.");

/*
Check the above line, there are two types in a single statement i.e.
there is a string and a number still we get the output "I'm a 20 year old
developer" because as we perform concatenation operation using '+'
JavaScript automatically converts the type of number to string which is as
Type Coercion.
*/

// Some more examples of Type coercion

console.log('15' - '5' - 5);   // outputs 5

/*
 In the above line of code, we can see strings performing subtraction
 operation i.e. because of type coercion the strings are converted to
 numbers i.e. 15 - 5 - 5 = 5.
*/

console.log('15' + '5' + 5);  // outputs 1555

/*
 This line outputs 1555 because the first number is a string and 
 instead of addition operation concatenation is done with all the 
 elements. Hence, it returns 1555.
*/

// Check example for multiplication and division operation

console.log('12' * '2');     
// Outputs 24 because strings are converted to numbers

console.log('12' / '2');    // outputs 6
// It is similar for division strings are converted to numbers

// Let's check what happens if we use logical operators
console.log('15' > '10'); 

/* 
Same thing happens string are first converted to numbers then the 
logical operation is done.
*/  

// Guess the Output

let h = '2' + 3;
h = h - 4;
console.log(h);

// Outputs 19 

/*
 Guess the output explanation: 

 * The above code outputs 19 because in the first line let h = '2' + 3
   there is a string and then a number. Hence, instead of addition 
   concatenation operation is performed i.e. '2' + '3' = 23;
   
 * Now value of h is 23, but in the next line we are performing 
   subtraction so 23 - 4 is 19. Hence, it returns 19 as the final output. 
*/


/*
---------------------------------------------
            Truthy and Falsy values
--------------------------------------------- 
 * In JavaScript, there are 5 falsy value -
   - 0.
   - ' '.
   - undefined.
   - null.
   - NaN. 
*/

console.log(Boolean(0));            // false
console.log(Boolean(undefined));    // false
console.log(Boolean('Sarthak'));    // true
console.log(Boolean({}));           // true
console.log(Boolean(''));           // false


// Examples of truthy and falsy values

//const salary = 0;
const salary = 1000; 

if(salary){
   console.log(`Your account is debited with ${salary}.`);
}else{
   console.log(`You didn't get paid.`);
}

/*
 The above code executes the else part because we initialized the salary
 variable to '0' which is a falsy value. Because of falsy value else
 part is executed.

 If we set the value of the salary to 1000 then the if block will be
 executed. Let's try that in the above code.
*/


/*
--------------------------------------------
      Equality Operators: == vs ===
--------------------------------------------
 -> '==' is also known as loose equality operators.
 -> '===' is also known as strict equality operators.
*/

const userAge = 18;

// Strict equality operator
if(userAge === 18){
   console.log('You just became an adult. (strict)');
}

// loose equality operator
/*
 -> Always prefer strict equality operator (===).
 -> Loose equality operator can create errors or bugs in your program.
 -> And many JS developers would prefer to use strict equality operator.
*/

if(userAge == 18){
   console.log('You just became an adult. (loose)');
}


// Taking input from the user using 'Prompt' function

/* Commenting this code so you can try the prompt func one-by-one */

// const favorite = Number(prompt("Enter your favorite number: ")); 

// if(favorite === 20){
//    console.log("Yayyy 20 is a cool number!");
// }
// else if(favorite === 4){
//    console.log("4 is also cool");
// }
// else{
//    console.log("The number you entered was neither 20 nor 4.");
// }

// if(favorite !== 20){
//    console.log("Why not 20?");
// }


// One more example for prompt function

// const useInput = prompt("Please enter a number: ");

// if(useInput >= 18){
//    alert(`Your age is ${useInput}, you can drive.`);
// }else{
//    const userAge = 18 - useInput;
//    alert(`You are young to drive. Come back after ${userAge} years.`);
// }


/*
------------------------------------
          Logical Operators
------------------------------------
-> AND, OR and NOT operators.
-> Definitions of all these operators are given in the Basic operator
   section.
-> Examples of Logical operators.
*/

const driverLicense = true;
const shouldDrive = true;

console.log(driverLicense && shouldDrive);  // Logical AND 
/* 
Evaluates to true because as we know both the conditions are true.
If either one condition was false it will return false.
*/ 

console.log(driverLicense || shouldDrive);  // Logical OR
/*
This also evaluates to true. As we know for logical OR either one 
condition should be true.
*/

console.log(!driverLicense);       // Logical NOT
// The logical NOT converts the true statement to false and 
// false statement to true.

/* 
-> As we have initialized both the conditions to true and we are using 
   logical AND operator the following condition evaluates to true so 
   the statement under 'if' block is executed.

-> Try changing one of the values to false and check to output.
*/

// We will create one more variable isTired

const isTired = true;  // True

/* 
-> We included the third variable using NOT operator which changes 
   the true to false. And as we know in AND all the conditions should 
   evaluate to true otherwise it returns false.

-> Try changing the 'isTired' variable to false which will be converted
   to true after using NOT operator which will evaluate the whole 
   condition to true, and then the if block is executed.
*/  

if(driverLicense && shouldDrive && !isTired){
   console.log("He is old enough to drive.");
}
else{
   console.log("Someone else should drive.");
}


/*
----------------------------------------
             Switch Statement
----------------------------------------
-> The JavaScript 'switch' keyword is used to create multiple conditional 
   statements, allowing you to execute different code blocks based on 
   different condition.
-> Example of 'switch' statement.
*/

const day = 'Monday';

/*
 Use the prompt function to take the input from the user for specific 
 condition to execute.
*/

//const day = prompt("Enter day: ");

switch(day){
   case 'Monday':
      console.log("It's monday start with JavaScript.");
      break;
   case 'Tuesday':
      console.log("It's Tuesday start with your project.");   
      break;
   case 'Wednesday':
      console.log("Wednesday is for working on website.");
      break;
   case 'Thurday':
      console.log("Thurday is for aptitude preparation.");
      break;
   case 'Friday':
      console.log("Friday JavaScript revision."); 
      break;
   case 'Saturday':
   case 'Sunday':
      console.log("It's Weekend 😎");
      break;
   default:
      console.log("This day is invalid.");
      break;
}

//----------------------------------------
//        Statments and expressions
//----------------------------------------

/*
 Expressions in JavaScript
 - Basic Example of expressions are:
   - 3 + 4 
   - (4 * 5) / 2  etc.
*/

// For example

const str = "23 year old"; // this itself is a expression

console.log(`I'm ${str}`);

// One more example

const l = 25;
const b = 5;

const prod = l * b;
console.log(`The product is ${prod}`);  // returns 125

// All of the above examples are expressions


/*
------------------------------------
         Conditional Ternary
------------------------------------
-> The conditional (ternary) operator is the only JavaScript operator 
   that takes three operands: a condition followed by a question mark 
   ( ? ), then an expression to execute if the condition is truthy 
   followed by a colon ( : ), and finally the expression to execute if 
   the condition is falsy.

   Example: const num = 20;

            num >= 18 ? console.log("Greater"): console.log("Smaller");
*/

// Some more example of (ternary) operator.

const yourAge = 23;

yourAge >= 18 ? console.log("You are an adult.") : 
                console.log("You are young");

// lets try to write this logic in if-else block

if(yourAge >= 18){
   console.log("Your are an adult.");
}
else{
   console.log("You are still young.");
}

/*
 -> Just see the difference between the ternary operator (?:) and the 
    if-else block. Ternary operator makes it easier to write conditional 
    statements.

 -> We can also use ternary operator (?:) inside a template literal.   
*/

// Example

console.log(`I am ${yourAge >= 18 ? 'an adult' : 'still young'}`);
// returns 'I am an adult' as the yourAge variable is initialized to 23.

console.log("Hello World");
