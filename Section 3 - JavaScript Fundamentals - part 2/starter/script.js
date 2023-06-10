"use strict"; /*
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`You can drive :D`);

// let interface = true;
// let private = 256;


function logger() {
  console.log(`My name is Rehan`);
}
logger();
logger();
logger();

function fruitProcessor(numOfApples, numOfOranges) {
  // console.log(numOfApples, numOfOranges);
  const juice = `Juice with ${numOfApples} apples and ${numOfOranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function Declaration
const age1 = calcAge1(1989);
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
console.log(age1);

// Function Expression

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(1989);
console.log(age2);


// Function Expression

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const age2 = calcAge2(1989);
console.log(age2);

// Arrow function
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const yearsLeftToRetire = 65 - age;
  return `${firstName} retires in ${yearsLeftToRetire} years`;
};

console.log(yearsUntilRetirement(1989, "Mosabbir"));
console.log(yearsUntilRetirement(1995, "Mahirah"));


const cutFruitPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (numOfApples, numOfOranges) {
  const applePieces = cutFruitPieces(numOfApples);
  const orangePieces = cutFruitPieces(numOfOranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const yearsLeftToRetire = 65 - age;

  if (yearsLeftToRetire > 0) {
    console.log(`${firstName} retires in ${yearsLeftToRetire} years.`);
    return yearsLeftToRetire;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1989, "Mosabbir"));
console.log(yearsUntilRetirement(1955, "Mosaraf"));
*/
/*
/////////////////////////////
///////// CHALLENGE #1
//////////////

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/
/*
const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);
*/
/*
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the 
returned values in 3 different variables, and log them to the console
*/
/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its 
capital city is ${capitalCity}`;
}

console.log(describeCountry("Bangladesh", 170, "Dhaka"));
console.log(describeCountry("Finland", 6, "Helsinki"));
console.log(describeCountry("Brazil", 217, "Brasilia"));
*/
/*
LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of 
the world population
2. To calculate the percentage, divide the given 'population' value by 7900 
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations (can be 
the same populations)

*/
/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld1(170));
console.log(percentageOfWorld1(217));

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log(percentageOfWorld2(1441));
console.log(percentageOfWorld2(170));
console.log(percentageOfWorld2(217));
*/
/*
LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called 
'percentageOfWorld3'
*/
/*
const percentageOfWorld3 = (population) => {
  return (population / 7900) * 100;
};
*/
/*
LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you 
like the most. This function takes in two arguments: 'country' and 
'population', and returns a string like this: 'China has 1441 million people, 
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the 
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/
/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const describePopulation = function (country, population) {
  return `${country} has ${population} million people, 
which is about ${percentageOfWorld1(population)}% of the world.`;
};

console.log(describePopulation("china", 1441));
console.log(describePopulation("Bangladesh", 170));
console.log(describePopulation("Finland", 6));
*/
/*
const friends = ["Kader", "Raju", "Shibly", "Rafiq"];
console.log(friends);

const y = [1989, 1995, 2018, 1960];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[friends.length - 1]);

friends[3] = "Rokti";
console.log(friends);
// friends = ["Bob", "Alice"];

const myself = ["Mosabbir", "Rehan", 2023 - 1989, "Teacher", friends];
console.log(myself);

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const years = [1989, 1995, 1955, 2018];

// console.log(calcAge(years));

console.log(calcAge(years[0]));
console.log(calcAge(years[1]));
console.log(calcAge(years[2]));
console.log(calcAge(years[years.length - 1]));

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
*/
/*
// Add Element to the array
const friends = ["Rokti", "Mahirah", "Rakib", "Rifat"];
const newLength = friends.push("Razu");
console.log(friends);
console.log(newLength);

friends.unshift("Rabeya");
console.log(friends);

// Remove Element
const popped = friends.pop(); // last
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Mahirah"));
console.log(friends.indexOf("Shibly"));
console.log(friends.includes("Rifat"));
console.log(friends.includes("Raihan"));

if (friends.includes("Raihan")) {
  console.log("You have a friend called Raihan.");
}
*/
/*
/////////////////////////////
/////// CHALLENGE #2
/////////////

Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array total containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/

/*
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/
/*
LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice. 
You may use the values you have been using previously. Store this array into a 
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the 
world population for these 4 population values. Use the function 
'percentageOfWorld1' that you created earlier to compute the 4 
percentage values
*/
/*
const populations = [6, 1441, 170, 217];
if (populations.length === 4) {
  console.log(true);
} else {
  console.log(false);
}
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);
*/
/*
const jonasArray = [
  "Jonas",
  "Schemedtmann",
  2023 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2023 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas.firstName);
console.log(jonas["firstName"]);
const nameKey = "Name";

console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about jonas?Please choose among firstName, lastName, age, job and friends."
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     `Wrong Request!Please choose among firstName, lastName, age, job and friends.`
//   );
// }

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtmann";

// Challenge

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
*/
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's License.`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.getSummary());
*/
/*
////////////////////////////////
/////////// CHALLENGE #3
/////////////////
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
*/
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}
*/
/*
console.log(`Lifting weights repetition 1 🏋️`);
console.log(`Lifting weights repetition 2 🏋️`);
console.log(`Lifting weights repetition 3 🏋️`);
console.log(`Lifting weights repetition 4 🏋️`);
console.log(`Lifting weights repetition 5 🏋️`);
console.log(`Lifting weights repetition 6 🏋️`);
console.log(`Lifting weights repetition 7 🏋️`);
console.log(`Lifting weights repetition 8 🏋️`);
console.log(`Lifting weights repetition 9 🏋️`);
console.log(`Lifting weights repetition 10 🏋️`);

console.log(`===============================`);
// for loop keep running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}
*/
/*
const jonas = [
  "Jonas",
  "Schmedtmann",
  2023 - 1991,
  "Teacher",
  ["Michael", "Peter", "Steven"],
];
// console.log(jonas[0]);
// console.log(jonas[1]);
// .................
// console.log(jonas[4]);

const types = [];
for (let i = 0; i < jonas.length; i++) {
  // reading from jonas array
  console.log(jonas[i], typeof jonas[i]);
  // filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1989, 1955, 2018, 1995];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}

console.log(ages);

console.log(`-- ONLY STRING --`);
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}
console.log(`-- BREAK WITH NUMBER --`);
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
*/
/*
const jonas = [
  "Jonas",
  "Schmedtmann",
  2023 - 1991,
  "Teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// 0, 1, ... , 4
// 4, 3, ... , 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise - ${exercise} : Lifting weight repetition ${rep} 🏋️`);
  }
}
*/
/*
let rep = 1;
while (rep <= 5) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end ...`);
}
*/
/*
/////////////////////////////
////////// CHALLENGE #4
////////////////
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
*/
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + calcTip(bills[i]));
}

console.log(tips);
console.log(totals);
*/
/*
BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.
*/
/*
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
*/

/*
LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your 
choice. Choose a country which has at least 2 or 3 neighbours. Store the array 
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of 
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from 
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the 
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the 
index of the country in the 'neighbours' array, and then use that index to 
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'
*/
/*
const neighbours = ["India", "Myanmar"];
neighbours.push("Utopia");
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log(`Probably not a central European country :D`);
}

const pos = neighbours.indexOf("India");
neighbours[pos] = "Sweden";
console.log(neighbours);
*/
/*
LECTURE: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing 
properties 'country', 'capital', 'language', 'population' and 
'neighbours' (an array like we used in previous assignments)
*/

// const myCountry = {
//   country: "Bangladesh",
//   capital: "Dhaka",
//   language: "Bengali",
//   population: 170,
//   neighbours: ["Myanmar", "India"],
// };

/*
LECTURE: Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the 
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then 
decrease it by two million using brackets notation.
*/

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
// and a capital called ${myCountry.capital}.`);

// myCountry.population += 2;
// myCountry["population"] -= 2;
// console.log(myCountry);

/*
LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method 
will log a string to the console, similar to the string logged in the previous 
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This 
method will set a new property on the object, called 'isIsland'. 
'isIsland' will be true if there are no neighbouring countries, and false if 
there are. Use the ternary operator to set the property.
*/
/*
const myCountry = {
  country: "Bangladesh",
  capital: "Dhaka",
  language: "Bengali",
  population: 170,
  neighbours: ["Myanmar", "India"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length > 0 ? false : true;
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
*/
/*
LECTURE: Iteration: The for Loop
1. There are elections in your country! In a small town, there are only 50 voters. 
Use a for loop to simulate the 50 people voting, by logging a string like this to 
the console (for numbers 1 to 50): 'Voter number 1 is currently voting
*/
/*
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}
*/
/*
LECTURE: Looping Arrays, Breaking and Continuing
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the 
percentages of the world population for the 4 population values. Use the 
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the 
'percentages' array that we created manually in the previous assignment, 
and reflect on how much better this solution is
*/
/*
const populations = [6, 1441, 170, 217];

const percentages2 = [];
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);
*/
/*
LECTURE: Looping Backwards and Loops in Loops
1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire 
arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't 
worry if it's too difficult for you! But you can still try to figure this out anyway �
*/
/*
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}
*/
/*
LECTURE: The while Loop
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', 
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop?
*/
/*
const populations = [6, 1441, 170, 217];

const percentages2 = [];
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
let i = 0;
while (i < populations.length) {
  percentages2.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages2);
*/
/*
// PROBLEM :
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// 1) Understanding the problem
// -- What is temp amplitude? Answer : difference between highest and lowest temp
// -- How to compute max and min temperatures?
// -- What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  // console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temperatures

// 1) Understanding the problem
// -- with 2 arrays, should we implement the functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// How to merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([5, 9, 10], [-1, 4, 7]);
console.log(amplitudeNew);
*/
/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // C) FIX
    // value: Number(prompt("Degrees Celsius:")),
    value: 10,
  };
  // console.log(measurement);
  // B) FIND
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
// console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([5, 9, 10], [3, 4, 7]);
console.log(amplitudeBug);
*/
/*
////////////////////////////
///// Coding Challenge #1
//////////////
Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK �
 */

// 1) Understanding the problem
// -- Array transformed to string , seperated by ...
// -- What is the X days? Answer : index + 1
// 2) Breaking up into sub-problem
// -- Transform array into string
// -- Transform each element to string with ºC
// -- String needs to contain day (index + 1)
// -- Add ... between element and start and end of string
// -- Log string to console
/*
const printForecast = function (arr) {
  let newStr = ``;
  for (let i = 0; i < arr.length; i++) {
    newStr += ` ... ${arr[i]}ºC in ${i + 1} days`;
  }
  return newStr + ` ...`;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
*/
