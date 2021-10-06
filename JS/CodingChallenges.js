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


