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
// console.log("Coding Challenge-1");
// const narutoWeight = 70;
// const narutoHeight = 1.65;

// const sasukeWeight = 82;
// const sasukeHeight = 1.85;

// const naruBmi = narutoWeight/narutoHeight ** 2;

// const sasuBmi = sasukeWeight/sasukeHeight ** 2;

// const higherBMI = naruBmi > sasuBmi;

// console.log(naruBmi, sasuBmi, higherBMI);

// // Outputs true if Naruto's BMI is higher than Sasuke's 
// // And false if Sasuke has higher BMI than Naruto's.
// // Test the above code with different data.

// /**
//  * Coding Challenge-2.
//  * If you want to try outputting a statement like Naruto has higher BMI
//    or vice versa, we can use conditional statements.
//  * Check the below code for example:
// */ 

// if(higherBMI){
//   console.log(`Naruto's BMI is (${naruBmi}) which is higher then Sasuke's BMI (${sasuBmi}).`);
// }
// else{
//   console.log(`Sasuke's BMI is (${sasuBmi}) which is higher then Naruto's BMI (${naruBmi}).`);
// }

// /*
// Outputs:  Naruto's BMI is (25.71166207529844) which is higher then 
// Sasuke's BMI (23.959094229364496).
// */


// /*
//  Coding Challenge - 3
 
//  1. Calculate the average score for each team, using the test data
//     below.
//  2. Compare the team's average scores to determine the winner of the 
//     competition, and print it to the console. Don't forget that there can
//     be a draw, so test for that as well (draw means they have the same
//     average score).
 
//  Test Data 1: Sharks score 96, 108 and 89. Hammer_heads score 88, 91 and 
//               110.
//  Test Data 2: Sharks score 97, 112 and 101. Hammer_heads score 109, 95
//               and 123.                

// */

// // const avgSharks = (97 + 112 + 101)/3;
// // const avgHammerh = (109 + 95 + 123)/3;

// // console.log(avgSharks, avgHammerh);

// // if(avgSharks > avgHammerh){
// //   console.log("Team Sharks wins.");
// // }
// // else if(avgSharks === avgHammerh){
// //   console.log("There's a Draw between both the teams");
// // }
// // else{
// //   console.log("Team Hammer Head wins.");
// // }

// /*
//  Bonus Part in the coding challenge
//  -> The team wins if avearage is more then or equal to 100.
// */ 

// // Bonus part - 1

// const avgSharks = (97 + 112 + 101)/3;
// const avgHammerh = (109 + 95 + 102)/3;

// console.log(avgSharks, avgHammerh);

// // Checking avg is greater then 100

// if(avgSharks > avgHammerh && avgSharks >= 100){
//   console.log("Team Sharks wins.");
// }
// else if(avgSharks < avgHammerh && avgHammerh >= 100){
//   console.log("Team Hammer Head wins.");
// }
// else if(avgSharks === avgHammerh && avgSharks >= 100 && avgHammerh >= 100){
//   console.log("There's a Draw between both the teams.");
// }else{
//   console.log("Nobody wins 😥");
// }


// // Coding challenge switch into if-else

// const day = 'monday';

// /* 
// const day = prompt("Enter day: "); try this prompt to get input from
// the user.
// */

// if(day === 'monday'){
//   console.log("Its monday :(");
// }
// else if(day === 'tuesday'){
//   console.log("Its tuesday :o");
// }
// else if(day === 'wednesday' || day === 'thursday'){
//   console.log("Its wednesday :|");
// }
// else if(day === 'friday'){
//   console.log("Its friday :)");
// }
// else if(day === 'saturday' || day === 'sunday'){
//   console.log("Weekend is back 🥳");
// }
// else{
//   console.log("Invalid day!!!");
// }

// /* 
//   Coding Challenge - 4
//   - Your task is to calculate the tip, depending on the bill value.
//     Create a variable called 'tip' for this. It's not allowed to use an 
//     if/else statement.
//   - Print a string to the console containing the bill value, the tip, and
//     the final value (bill + tip).
//     Example: 'The bill was 275, the tip was 41.25, and the total value 
//     316.25'
//   - Test data: Test for bill values 275, 40 and 430.
// */

// const bill = 275;
// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(tip);

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


// // Lets try this challenge using if/else statements

// if(bill >= 50 && bill <= 300){
//   tip = bill * 0.15;
// }
// else{
//   tip = bill * 0.2;
// }

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


// /*
// ----------------------------------------
//      JavaScript Fundamentals Part-2
// ----------------------------------------    
// */

// /* 
//   Coding challenge-1
  
//   * Back to the two gymnastics teams, the Sharks and the Hammerheads.
//     There is a new gymnastics discipline, which works differently.
  
//   * Each team competes 3 times, and then the average of the 3 scores is 
//     calculated (so one average score per team).

//   * A team ONLY wins if it has at least DOUBLE the average score of the
//     other team. Otherwise, no team wins.

//   1. Create an arrow function to calculate the average of 3 scores.
  
//   2. Use the function to calculate the average for both teams.
  
//   3. Create a function 'checkWinner' that takes the average score of each
//     team as parameters.
//     ('avgShark' and 'avgHammerHead'), and then logs the winner to the 
//     console, together with the victory points, according to the rule above.
//     Example: "Sharks win (30 vs. 15)".
  
//   4. Use the 'checkWinner' function to determine the winner for both DATA 1
//     and DATA 2.
  
//   5. Ignore draws this time.  

//   * TEST DATA 1: Sharks score 44, 23 and 71. HammerHeads score 65, 54 and
//     49.

//   * TEST DATA 2: Sharks score 85, 54 and 41. HammerHeads score 23, 34 and
//     27.
// */

// // Arrow function to calculate the average 
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const scoreShark = calcAverage(85, 54, 41);
// const scoreHammerHead = calcAverage(23, 34, 27);

// console.log(scoreShark, scoreHammerHead);

// const checkWinner = function (averageShark, averageHammerHead){

//   if(averageShark >= 2 * averageHammerHead){
//     console.log(`Shark wins by (${averageShark} vs. ${averageHammerHead}).`);
//   }
//   else if(averageHammerHead >= 2 * averageShark){
//     console.log(`Hammer Heads win by (${averageHammerHead} vs ${averageShark}).`);
//   }
//   else{
//     console.log('No teams win...');
//   }
// }

// checkWinner(scoreShark, scoreHammerHead);

// /**
//  * Coding challenge - 2
 
//  * Naruto is still building his tip calculator, using the same rules as 
//    before: Tip 15% of the bill if the bill value is between 50 and 300, 
//    and if the value is different, the tip is 20%.

//  1. Write a function 'calcTip' that takes any bill value as an input
//     and returns the corrensponding tip, calculated based on the rules above
//     (you can check out the code from the first tip calculator challenge if
//     you need to). Use the function type you like the most. Test the 
//     function using a bill value of 100.
 
//  2. And now let's use arrays. So create an array 'bills' containing the
//     test data below.

//  3. Create an array 'tips' containing the tip value for each bill, calculated
//     from the function you created before.
 
//  4. Bonus: Create an array 'total' containing the total values, so the bill + tip.

//  Test Data: 125, 555 and 44.
// */


// const tipCalc = function (bill) {
//   // You can use the ternary operator to reduce the code
  
//   /*
//   return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
//   */

//   if(bill >= 50 && bill <= 300){
//     return bill * 0.15;
//   }
//   else{
//     return bill * 0.2;
//   }
  
// };

// const bills = [125, 555, 44];

// const tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
// console.log(bills, tips);

// // Bonus challenge

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(total);


/*
  Coding challenge-3 
  
  * Let's go back to Naruto and Sasuke comparing BMIs. This time, let's 
    use objects to implement the calculations. 
    Remember: BMI = mass/height ** 2. (mass in kg and height in meter)

  * For each of them, create an object with properties for their full name,
    mass, and height (Naruto Uzumaki and Sasuke Uchiha).

  * Create a 'calcBMI' method on each object to calculate the BMI (the same
    method on both the objects). Store the BMI value to a property, and 
    also return it from the method.
  
  * Log to the console who has the higher BMI, together with the full name 
    and the respective BMI. 
    Example: "Naruto's BMI (25.4) is higher than Sasuke's (23.4) BMI".
  
  * Test Data: Naruto's weights 78 kg and is 1.69 m tall.
               Sasuke's weights 92 kg and is 1.95 m tall.   

*/


const naruto = {
  fullName : 'Naruto Uzumaki',
  mass : 78,
  height : 1.69,
  calcBMI : function (){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const sasuke = {
  fullName : 'Sasuke Uchiha',
  mass : 92,
  height : 1.95,
  calcBMI : function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

console.log(naruto.calcBMI(), sasuke.calcBMI());

if(naruto.calcBMI() > sasuke.calcBMI()){
  console.log(`${naruto.fullName}'s BMI (${naruto.calcBMI()}) is higher than ${sasuke.fullName}'s BMI (${sasuke.calcBMI()}).'`);
}
else if(sasuke.calcBMI() > naruto.calcBMI()){
  console.log(`${sasuke.fullName}'s BMI (${sasuke.calcBMI()}) is higher than ${naruto.fullName}'s BMI (${naruto.calcBMI()}).'`);
}


/*
---------------------------------------
          Coding Challenge - 4
---------------------------------------

1. Create an array 'bills' containing all 10 test bill values.

2. Create empty arrays for the tips and the totals ('tips' and 'totals').

3. Use the 'calcTip' function we wrote before to calculate tips and total values
   (bill + tip) for every bill value in the bills array. Use a for loop 
   to perform 10 calculations.

4. Test Data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52.

*/

const calcTip = function (bill) {
  // You can use the ternary operator to reduce the code
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// creating "bills" array
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++){
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);      
}

console.log(bills, tips, totals);

const calcAvg = function(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum/ arr.length;

}

console.log(calcAvg(totals));