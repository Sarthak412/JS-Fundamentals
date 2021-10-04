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

