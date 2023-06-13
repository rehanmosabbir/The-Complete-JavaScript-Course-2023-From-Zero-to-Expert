'use strict';
/*
function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';
      // Reassigning outer scope's variable
      output = 'New Output';
      const str = `oh! You're a millennial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(output);
  }

  //   console.log(str);
  console.log(firstName);
  printAge();
  //   console.log(add(3, 4));
  return age;
}

const firstName = 'Jonas';
calcAge(1991);

//  Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'jonas';
let job = 'Teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShopingCart();

var numProducts = 10;

function deleteShopingCart() {
  console.log('All Products deleted.');
}

var x = 50;
let y = 60;
const z = 70;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


console.log(this);
function calcAge(birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
}

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this);
};

calcAgeArrow(1991);

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
// f();


var firstName = 'Matilda';
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
    // Solution 1
    // let self = this;
    // function isMillennial() {
    //   console.log(this);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // }
    // isMillennial();

    // Solution 2
    const isMillennial = () => {
      console.log(this);
      // console.log(this.year >= 1981 && this.year <= 1996);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillennial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 3);
addExpr(2, 3, 8, 9);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

// addArrow(2, 3);


let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const jonas = {
  firstName: 'Jonas',
  year: 1991,
};

const friend = jonas;
friend.year = 1989;

console.log("Jonas:", jonas);
console.log("Friend:", friend);
*/

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// Copying objects
const jessicaNew = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaNewCopy = Object.assign({}, jessicaNew);
jessicaNewCopy.lastName = 'Davis';
jessicaNewCopy.family.push('Matilda', 'John');
console.log('Before marriage:', jessicaNew);
console.log('After marriage:', jessicaNewCopy);
