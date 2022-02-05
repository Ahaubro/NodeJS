// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const convertedOne = Number(numberOne)
const convertedTwo = Number(numberTwo)

const result = convertedOne + convertedTwo

console.log(result)

// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const anotherConOne = Number(anotherNumberOne)
const anotherConTwo = Number(anotherNumberTwo)

const result2 = anotherConOne + anotherConTwo

const fixed = result2.toFixed(2)

console.log(fixed)

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const result3 = one + two + three / 3

const fixed2 = result3.toFixed(5)

console.log(fixed2)

// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

const charByIndex = letters[2]

console.log(charByIndex)

// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const replaced = fact.replace("j", "J")

console.log(replaced)
// --------------------------------------

