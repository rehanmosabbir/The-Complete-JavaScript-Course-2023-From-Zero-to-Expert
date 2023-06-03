/*
let JS = "amazing";
// if (JS === "amazing") alert("JavaScript is FUN!");
console.log(40 + 30 + 21 - 10);
console.log("Matilda");
console.log(54);

// Variable naming convention
let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// let 3times = 3;
// let function = "function";
let $function = "function";
// let jonas&matilda = "JM";
let jonas_matilda = "JM";
const PI = 3.1416;

let myFirstJob = "Programmer";
let mySecondJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);
console.log(mySecondJob);

///////////////////////////////
//// Values and Variables

let country = "Bangladesh";
let continent = "Asia";
let population = 170000000;


// javascript data types
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

javascriptIsFun = "YES!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

console.log(typeof 23);
console.log(typeof "Jonas");
console.log(typeof true);

let year;
console.log(year);
console.log(typeof year);
let firstName = null;
console.log(firstName);
console.log(typeof null);

year = 1989;
console.log(year);
console.log(typeof year);


// let const and var

let age = 34;
age = 35;
console.log(age);

const birthYear = 1989;
// birthYear = 1991;
// const firstName;

var firstName = "Mosabbir";
firstName = "Matilda";
console.log(firstName);

lastName = "Rehan";
console.log(lastName);


// Math Operators
const now = 2023;
const ageRehan = now - 1989;
const ageRifat = now - 1995;

console.log(ageRehan, ageRifat);
console.log(ageRehan * 2, ageRehan / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 // 2 * 2 * 2

let firstName = "Mosabbir";
let lastName = "Rehan";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 100;
x += 10;
x -= 20;
x *= 2;
x /= 10;

x++;
x--;
x--;
console.log(x);

// Comparison Operators
console.log(ageRehan > ageRifat);
console.log(ageRehan >= 18);

const isOldEnough = ageRehan >= 18;
console.log(isOldEnough);

console.log(now - 1989 > now - 1995);

// Operator Precedence
const now = 2023;
const ageRehan = now - 1989;
const ageRaifah = now - 2018;

console.log(ageRehan, ageRaifah);

const ageAverage = (ageRaifah + ageRehan) / 2;
console.log(ageRehan, ageRaifah, ageAverage);
console.log(25 - 10 - 5);
console.log(now - 1989 > now - 2018);
let x = (y = 25 - 10 - 5);
console.log(x, y);
*/
/*
////////////////////////////////
//////// Coding Challenge #1
////////////

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK �
*/
/*
// const massMark = 78;
// const massJohn = 92;
// const heightMark = 1.69;
// const heightJohn = 1.95;

const massMark = 95;
const massJohn = 85;
const heightMark = 1.88;
const heightJohn = 1.76;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
*/

/*
LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console
*/

/*
LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some 
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never 
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens
*/

/*
LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population, 
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than 
Finland?
4. The average population of a country is 33 million people. Does your country 
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million 
people speak portuguese'
*/
/*
const country = "Bangladesh";
const continent = "Asia";
let population = 170;
const isIsland = true;
let language;
language = "Bangla";

console.log(country, population, isIsland, language);

let halfPopulation = population / 2;
console.log(halfPopulation);
population++;
console.log(population);

populationFinland = 6;
hasMorePopulationThanFinland = population > populationFinland;
console.log(hasMorePopulationThanFinland);

averagePopulation = 33;
hasLessPopulationThanAverage = population < averagePopulation;
console.log(hasLessPopulationThanAverage);

let description =
  "Portugal is in Europe, and its 11 million people speak portuguese";
*/
/*
const firstName = "Jonas";
const job = "Teacher";
const birthYear = 1991;
let now = 2023;

const jonas =
  "I'm " + firstName + ", a " + (now - birthYear) + " years old " + job + "!";
console.log(jonas);
const jonasNew = `I'm ${firstName}, a ${now - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(
  "String \n\
with multiple \n\
lines"
);
console.log(`String
with multiple
lines`);
*/
/*
LECTURE: Strings and Template Literals
1. Recreate the 'description' variable from the last assignment, this time 
using the template literal syntax
*/
/*
let description = `Portugal is in Europe, and its 11 million people speak portugese.`;
console.log(description);
*/
/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`Sarah can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years 😊.`);
}

const birthYear = 1989;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/
/*
LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the 
console: 'Portugal's population is above average'. Otherwise, log a string like 
'Portugal's population is 22 million below average' (the 22 is the average of 33 
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original
*/
/*
let population = 170;
const averagePopulation = 33;

if (population > averagePopulation) {
  console.log(`Portugal's population is above average`);
} else {
  console.log(
    `Portugal's population is ${
      averagePopulation - population
    } million below average`
  );
}
*/

/*
//////////////////////////////
//////// Coding Challenge #2
////////////

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK �
*/

/*
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

// const massMark = 95;
// const massJohn = 85;
// const heightMark = 1.88;
// const heightJohn = 1.76;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's(${BMIJohn})!`);
} else {
  console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark})!`);
}


// Type Conversion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Rehan"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coersion

console.log("I am " + 23 + " years old.");
console.log("I am " + String(23) + " years old.");
console.log("23" + 5 + 4);
console.log(5 + 4 + "23");
console.log("23" - "10" - 5);
console.log("23" * 2);
console.log("23" / "2");

let n = "1" + 1;
n = n - "1";
console.log(n);


// 5 falsy values : 0 , undefined, NaN, '', null
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean({}));
console.log(Boolean("Rehan"));

let money = 0;
if (money) {
  console.log("Don't spend it all.");
} else {
  console.log("You should get a job.");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined!");
} else {
  console.log("Height is UNDEFINED!");
}
*/

/*
LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5'; // 4
'19' - '13' + '17'; // '617'
'19' - '13' + 17; // 23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; // 1143
2. Execute the operations to check if you were right
*/
/*
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);
*/
/*
const age = 18;
if (age == 18) console.log("You have just become an adult 😊(loose)");
if (age === 18) console.log("You have just become an adult 😊(strict)");

const favouriteNum = Number(prompt("What's your favourite number?"));
console.log(favouriteNum);

if (favouriteNum === 23) {
  console.log("Cool! 23 is an amazing number.");
} else if (favouriteNum === 9) {
  console.log("9 is an amazing number.");
} else if (favouriteNum === 7) {
  console.log("7 is an amazing number.");
} else {
  console.log("Number is not 23 or 9 or 7.");
}
*/
/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasGoodVision);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive.");
// } else {
//   console.log("Someone else should drive.");
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && !isTired);
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive.");
} else {
  console.log("Someone else should drive.");
}
*/

/*
//////////////////////////////
//////// CHALLENGE #3
////////////

There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.



TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110. 
*/
/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy 🏆.");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Koalas win the trophy 🏆.");
} else {
  console.log("Both win the trophy 🏆.");
}


const day = "friday";
switch (day) {
  case "monday":
    console.log("Plan course structure.");
    console.log("Go to coding meetup.");
    break;
  case "tuesday":
    console.log("prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend 😊!");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure.");
  console.log("Go to coding meetup.");
} else if (day === "tuesday") {
  console.log("prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend 😊!");
} else {
  console.log("Not a valid day!");
}
*/
/*
LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this: 
prompt('How many neighbour countries does your country 
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality 
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when 
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of 
'numNeighbours'. Notice what happens when there is exactly 1 border! Why 
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now 
when you input 1
8. Reflect on why we should use the === operator and type conversion in this 
situation
*/
/*
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
if (numNeighbours == 1) {
  console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
*/
/*
LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a 
country that speaks english, has less than 50 million people and is not an 
island.
3. Write an if statement to help Sarah figure out if your country is right for her. 
You will need to write a condition that accounts for all of Sarah's criteria. Take 
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If 
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily 
change some variables in order to make the condition true (unless you live in 
Canada :D)
*/
/*
const isSpeakEnglish = false;
const hasLessThanFiftyMillion = false;
const isIsland = true;

if (isSpeakEnglish && hasLessThanFiftyMillion && !isIsland) {
  console.log("You should live in Bangladesh :)");
} else {
  console.log("Bangladesh does not meet your criteria :(");
}
*/
/*
LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'
*/
/*
const language = "bengali";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
*/
/*
let age = 34;

age >= 18
  ? console.log("I like to drink coffee ☕")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "coffee ☕" : "water 💧";
console.log(drink);

let drinkNew;
if (age >= 18) {
  drinkNew = "coffee ☕";
} else {
  drinkNew = "water 💧";
}
console.log(drinkNew);

console.log(`I like to drink ${age >= 18 ? "coffee ☕" : "water 💧"}`);
*/
/*
////////////////////////////
///////// CHALLENGE #4
//////////////
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430
*/
/*
const bill = 430;
let tip;
if (bill >= 50 && bill <= 300) {
  tip = bill * 0.15;
} else {
  tip = bill * 0.2;
}

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/
/*
LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator 
to log a string like this to the console: 'Portugal's population is above average'. 
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original
*/
/*
const population = 13;
let message = population > 33 ? "above" : "below";
console.log(`Portugal's population is ${message} average`);
*/
