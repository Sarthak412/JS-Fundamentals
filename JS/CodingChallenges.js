/**
 * Coding Challenges  
*/

/* 
 * BMI calculator coding challenge - 1  
 * Store naruto's and sasuke's mass and height in variables.
 * Calculate both their BMIs using the formula i.e.
   BMI = mass/height ** 2. 
 * Create a boolean variable 'higherBMI' containing information about
   whether naruto has higher BMI then sasuke.
*/ 
console.log("Coding Challenge-1");
const narutoWeight = 70;
const narutoHeight = 1.65;

const sasukeWeight = 82;
const sasukeHeight = 1.85;

const naruBmi = narutoWeight/narutoHeight ** 2;

const sasuBmi = sasukeWeight/sasukeHeight ** 2;

const higherBMI = naruBmi > sasuBmi;

console.log(naruBmi, sasuBmi, higherBMI);

// Outputs true if Naruto's BMI is higher than Sasuke's 
// And false if Sasuke has higher BMI than Naruto's.
// Test the above code with different data.

/**
 * Coding Challenge-2.
 * If you want to try outputting a statement like Naruto has higher BMI
   or vice versa, we can use conditional statements.
 * Check the below code for example:
*/ 

if(higherBMI){
  console.log(`Naruto's BMI is (${naruBmi}) which is higher then Sasuke's BMI (${sasuBmi}).`);
}
else{
  console.log(`Sasuke's BMI is (${sasuBmi}) which is higher then Naruto's BMI (${naruBmi}).`);
}

/*
Outputs:  Naruto's BMI is (25.71166207529844) which is higher then 
Sasuke's BMI (23.959094229364496).
*/


/*
 Coding Challenge - 3
 
 1. Calculate the average score for each team, using the test data
    below.
 2. Compare the team's average scores to determine the winner of the 
    competition, and print it to the console. Don't forget that there can
    be a draw, so test for that as well (draw means they have the same
    average score).
 
 Test Data 1: Sharks score 96, 108 and 89. Hammer_heads score 88, 91 and 
              110.
 Test Data 2: Sharks score 97, 112 and 101. Hammer_heads score 109, 95
              and 123.                

*/

// const avgSharks = (97 + 112 + 101)/3;
// const avgHammerh = (109 + 95 + 123)/3;

// console.log(avgSharks, avgHammerh);

// if(avgSharks > avgHammerh){
//   console.log("Team Sharks wins.");
// }
// else if(avgSharks === avgHammerh){
//   console.log("There's a Draw between both the teams");
// }
// else{
//   console.log("Team Hammer Head wins.");
// }

/*
 Bonus Part in the coding challenge
 -> The team wins if avearage is more then or equal to 100.
*/ 

// Bonus part - 1

const avgSharks = (97 + 112 + 101)/3;
const avgHammerh = (109 + 95 + 102)/3;

console.log(avgSharks, avgHammerh);

// Checking avg is greater then 100

if(avgSharks > avgHammerh && avgSharks >= 100){
  console.log("Team Sharks wins.");
}
else if(avgSharks < avgHammerh && avgHammerh >= 100){
  console.log("Team Hammer Head wins.");
}
else if(avgSharks === avgHammerh && avgSharks >= 100 && avgHammerh >= 100){
  console.log("There's a Draw between both the teams.");
}else{
  console.log("Nobody wins 😥");
}


// Coding challenge switch into if-else

const day = 'monday';

/* 
const day = prompt("Enter day: "); try this prompt to get input from
the user.
*/

if(day === 'monday'){
  console.log("Its monday :(");
}
else if(day === 'tuesday'){
  console.log("Its tuesday :o");
}
else if(day === 'wednesday' || day === 'thursday'){
  console.log("Its wednesday :|");
}
else if(day === 'friday'){
  console.log("Its friday :)");
}
else if(day === 'saturday' || day === 'sunday'){
  console.log("Weekend is back 🥳");
}
else{
  console.log("Invalid day!!!");
}

/* 
  Coding Challenge - 4
  - Your task is to calculate the tip, depending on the bill value.
    Create a variable called 'tip' for this. It's not allowed to use an 
    if/else statement.
  - Print a string to the console containing the bill value, the tip, and
    the final value (bill + tip).
    Example: 'The bill was 275, the tip was 41.25, and the total value 
    316.25'
  - Test data: Test for bill values 275, 40 and 430.
*/

const bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(tip);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


// Lets try this challenge using if/else statements

if(bill >= 50 && bill <= 300){
  tip = bill * 0.15;
}
else{
  tip = bill * 0.2;
}

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


