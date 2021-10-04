/**
 * Coding Challenges  
 * BMI calculator
*/

/* 
 * Store naruto's and sasuke's mass and height in variables.
 * Calculate both their BMIs using the formula i.e.
   BMI = mass/height ** 2. 
 * Create a boolean variable 'higherBMI' containing information about
   whether naruto has higher BMI then sasuke.
*/ 

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
 * If you want to try outputting a statement like Naruto has higher BMI
   or vice versa, we can use conditional statements.
 * Check the below code for example:
*/ 

if(naruBmi > sasuBmi){
  console.log('Naruto has higher BMI.');
}
else{
  console.log('Sasuke has higher BMI');
}

// Outputs 'Naruto has higher BMI'.
