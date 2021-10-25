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



/*
-------------------------------------------
           Introduction to Arrays
-------------------------------------------
*/

// There are Two ways of declaring an array

const powerFullNinjas = ['Naruto', 'Sasuke', 'Minato', 'Itachi'];

console.log(powerFullNinjas);

// 2nd way using Array function

const highestPower = new Array(100, 95, 100, 99);

console.log(highestPower);

/* 
As we know array starts from 0 to n so if we want to access a specific
element in the array we can use the array name and its index. Look at the 
below example, 
*/

console.log(powerFullNinjas[0], powerFullNinjas[2], powerFullNinjas[1]);

// As our first array consists of 4 ninjas so our array starts from 0 to 3

// If we want to access the last element of the array we will write,

console.log(powerFullNinjas[3]);

/* 
There's one more way if you want print the last element in the array
i.e. using length function. For example,
*/

console.log(powerFullNinjas[powerFullNinjas.length - 1]); // returns Itachi

/*
 * It returns the last element of the array because using length function 
   we get the actual size of the array and the size of the array is 4. 
   And if we write length - 1 gives us 3 which points to the last element 
   in the array. For example, 

   console.log(powerFullNinjas[powerFullNinjas.length - 1]) = 4 - 1 = 3.
   console.log(powerFullNinjas[3]);

 * That's the basic way of declaring and accessing the elements in the 
   array. 
*/

// Let's see how can we insert into array

powerFullNinjas[2] = 'Jiraya'; // We updated the 2nd position to 'Jiraya'

// Let's log this updated array to the console

console.log(powerFullNinjas);

// Returns ['Naruto', 'Sasuke', 'Jiraya', 'Itachi']
// As we can see the second position is updated to 'Jiraya'

/*
 * As we can see here our array was declared using const keyword but still 
   we change/updated the values in the array.
   
 * That happens because, arrays can be mutated. And const keyword gives an
   error when we try to change the primitive value.
 
 * Even if we update some part of the array we cannot change the whole array.
   For example,

   powerFullNinjas = ['Hinata', 'Sakura', 'Obito'];

   we cannot change the array like that it will through an error saying
   'Assignment to constant variable'. 
*/

// Array can store different types of data together i.e. string and number

const narutoInfo = ['Naruto', 'Uzumaki', 24, 'Hokage'];
console.log(narutoInfo);

// As you can see we stored numbers and string together
// We can also store arrays inside arrays for example,

const arrInarr = ['Naruto', 'Uzumaki', 24, 'Hokage', powerFullNinjas];

// We stored the first array i.e. 'powerFullNinjas' in 'arrInarr'.

// We can create a variable to store data and refer the variable in the array
// For example,

const firstHokage = 'Hashirama';
const posi = '1st Hokage';

const newArr = [firstHokage, posi, 35, 'Powerfull'];
console.log(newArr);

// As you can see we referred the data from a variable in the array.

// Exercise 

const calc_Age = function (b_year){
    return 2021 - b_year;
}

const y = [2000, 2001, 2004, 2006];

const a1 = calc_Age(y[0]);
const a2 = calc_Age(y[1]);
const a3 = calc_Age(y[2]);

console.log(a1, a2, a3);    // returns 21 20 17


/*
-----------------------------------------------
       Basic Array operations (Methods)
-----------------------------------------------       
*/

/*
 push() function: push() function in array is used to insert new element 
 at the end of the array.
*/

// Example of push()

const friends = ['Sarthak', 'Aryan'];

friends.push('Mitesh');
friends.push('Madara');

console.log(friends);

/*
 unshift() function: unshift() function in array is used to insert new 
 element at the beginning of the array.
*/

// Example of unshift()
// Using the same array 'friends'.

friends.unshift('Itachi');
console.log(friends);

/*
 pop() function: pop() function in array is used to remove the element
 from the array, pop() removes the last element.
*/

friends.pop();
console.log(friends);  // 'Madara' is removed from the array.

/*
 shift() function: shift() function in array is used to remove element 
 from the beginning of the array.
*/

friends.shift();
console.log(friends);

/*
 indexOf() function: indexOf() function in array returns the index of the
 array elements.
*/

console.log(friends.indexOf('Mitesh'));

// returns -1 for elements which are not present in the array
console.log(friends.indexOf('Itachi'));

/*
 -> includes() function: includes() function in array returns boolean 
 values. For example, if the element is present in the array it'll return 
 true else false.
 -> includes() can be use to write conditional statements.
    
 Let's see one example:
*/

console.log(friends.includes('Sarthak'));  // returns true

console.log(friends.includes('Madara'));  // returns false

// Let's add a number to array 

friends.push(34);
console.log(friends);

console.log(friends.includes('34')); 

/* 
 The above statement returns false because the number is treated as a 
 string.
*/

console.log(friends.includes(34));      // returns true 

// Let's write a conditional statement using includes function

if(friends.includes('Mitesh')){
    console.log("Yes you have a friend named Mitesh");
}

if(friends.includes('Itachi')){
    console.log("Yes you have a friend named Mitesh");
}else{
    console.log("This name is not in your friend list");
}


/*
----------------------------------------
          Introduction to Objects
----------------------------------------
*/

// Object in JavaScript

const sarthakInfo = {
    firstName : 'Sarthak',
    lastName : 'Kamble',
    age : 20,
    job : 'Software Engineer',
    skills : ['C++', 'Python', 'JavaScript']
};

console.log(sarthakInfo);

/*
-> 'sarthakInfo' is a object and the key values in that object are 
   'first_Name', last_Name etc. 
-> The object is created using curly braces with a variable name.
*/


/*
-------------------------------------------
          Dot vs. Bracket notation
-------------------------------------------          

* To retrieve a property from the object there are two ways, 
  - Dot operator.
  - Bracket operator.
*/

// Lets use the 'dot' operator to retrieve the property from the object

console.log(sarthakInfo.firstName);

// returns first_name from the object.

console.log(sarthakInfo.lastName);     // return last_name

// Let's use the 'bracket' operator to retrieve the property from the object

console.log(sarthakInfo['first_Name']);

const nameKey = 'Name';

console.log(sarthakInfo['first' + nameKey]);
console.log(sarthakInfo['last' + nameKey]);

// What if the user wants to access a specific property

// Check this code:

/*
const infoNeeded = prompt("What do you want to know about Sarthak? firstName, lastName, age, job, skills");

if(sarthakInfo[infoNeeded]){
    console.log(sarthakInfo[infoNeeded]);
}else{
    console.log("Wrong request!! Select from firstName, lastName, age, job, skills");
}

sarthakInfo.location = 'Mumbai, India';
sarthakInfo["Github"] = 'Sarthak412';
*/

// Challenge
// Sarthak has 3 skills, and his favorite skill is C++

console.log(`${sarthakInfo.firstName} has ${sarthakInfo.skills.length} skills, 
and his favorite skills is ${sarthakInfo.skills[0]}.`);

/*
-----------------------------------------
              Object Methods
-----------------------------------------              

-> We can store mulitple types of data in an object.
-> We can write a function inside a object. For example,

*/

const sarthak_Info = {
    firstName: 'Sarthak',
    lastName: 'Kamble',
    birthY: 2000,
    job: 'Cyber Security Analyst',
    hasDriversLicense: true,
    
    // calc_Age : function(birthY) {
    //     return 2021 - birthY;
    // }

    // calc_Age : function(birthY) {
    //     return 2021 - this.birthY;
    // }

    calc_Age : function() {
        this.age = 2021 - this.birthY;  // Creating a new property age
        return this.age;
    },

    getSummary : function() {
        return `${this.firstName} is a  ${sarthak_Info.calc_Age()} year old Engineer, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`;
    }

};

console.log(sarthak_Info.calc_Age());   // returns 21

// logging getSummary to the console

console.log(sarthak_Info.getSummary());


/*
-----------------------------------------
        Iteration: The For Loop
----------------------------------------- 

* For loop keeps running while condition is TRUE.
  It terminates when the condition evaluate to false.
*/

console.log('For loop in JavaScript');

/*
 Syntax of a for loop in JavaScript 

 for(initial_value; condition; initial_value increment){
     statement;
 }

 For Example: 

 for(let i = 0; i <= 5; i++){
     console.log(i);
 }

 O/p: 0 
      1
      2
      3
      4
      5
*/

for(let rep= 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep}`);
}

// Exercise

// Write a JS program to print even numbers from 1 to 20 using for loop

for(let i = 1; i <= 20; i++){        // Using for loop to iterate from 1-20
    if(i % 2 === 0){            // Checking if i % 2 === 0 which means even
        console.log(i);
    }
}

// returns even numbers from 1 to 20 

/* Similarly, we can do this for printing odd numbers */

for(let i = 1; i <= 20; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}


/* 
----------------------------------------------
    Looping arrays, Breaking and Continuing
----------------------------------------------    
*/


const pokemon = [
    'Palkia',
    'Psychic',
    10000,
    'Legendary',
    'Hyper Beam'
];

const types = [];

for(let i = 0; i < pokemon.length; i++){
    // reading from pokemon array
    console.log(pokemon[i], typeof pokemon[i]);

    // filling types array
    types[i] = typeof pokemon[i];

    types.push(typeof pokemon[i]);

}

console.log(types);

// Let's see one more example

const years = [2000, 2005, 1999, 2003];
const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2021 - years[i]);
}

console.log(ages);

/*
  Break and Continue statements in for loop
*/

console.log("------ Only String-------");

for(let i = 0; i < pokemon.length; i++){
    if(typeof pokemon[i] !== 'string') continue;

    console.log(pokemon[i], typeof pokemon[i]);
}

console.log("------ Break with number -------");

for(let i = 0; i < pokemon.length; i++){
    if(typeof pokemon[i] === 'number') break;
 
    console.log(pokemon[i], typeof pokemon[i]);
}

console.log("----Looping Backwards in loops----");

/* 
    Looping backwards in Loops
*/

// For example let's take the pokemon array we created

// This "for" loop will loop through array from last element to first element
// i.e. n to 0  

for(let i = pokemon.length - 1; i >= 0; i--){
    console.log(i, pokemon[i]);
}

console.log("--------Array Reversal---------");

const numbers = [1, 2, 3, 4, 5];
const reversedArr = [];

console.log(numbers);

// lets write a program to reverse the array

for(let i = numbers.length - 1; i >= 0; i--){
    reversedArr.push(numbers[i]);
}

console.log(reversedArr); // Outputting the reversed array

/*
 We can also write loops inside a loop (nesting).
 Let's see example of nesting loops.
*/

console.log("||| Loops inside loops |||")

for(let exercise = 1; exercise <= 3; exercise++){
    console.log(`-----Starting Exercise ${exercise}-----`);

    for(let rep = 1; rep <= 5; rep++){
        console.log(`Exercise ${exercise}: Weight lifting ${rep}`);
    }
}


/*
-------------------------------------
       While loop in JavaScript  
-------------------------------------

-> Write the same program to print "Weight lifting" 5 times using while
   loop.
   
*/

console.log("----While loop----")

let rep = 1;

while (rep <= 5) {
    console.log(`Weight lifting, repetition ${rep}`);
    rep++;
}

// Let's create a single dice program  

let dice = Math.trunc(Math.random() * 6) + 1; 

while (dice !== 6) {
    console.log(`You rolled ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;    
    if (dice === 6) {
        console.log("Loop is about to end...");
    }
}
