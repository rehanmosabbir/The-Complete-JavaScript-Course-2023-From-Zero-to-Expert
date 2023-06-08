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

/*
BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.
*/

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
