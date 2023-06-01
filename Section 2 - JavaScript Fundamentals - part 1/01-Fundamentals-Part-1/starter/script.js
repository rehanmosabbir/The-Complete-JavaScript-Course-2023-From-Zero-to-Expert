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
