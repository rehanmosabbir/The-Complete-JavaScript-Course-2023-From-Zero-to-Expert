'use strict';
/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 5);
createBooking('LH123', 7, 1400);
createBooking('LH123', undefined, 300);


const flight = 'LH123';
const jonas = {
  name: 'Jonas',
  passport: 568974123698,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH235';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 568974123698) {
    console.log(`Checked in`);
  } else {
    console.log(`Wrong passport`);
  }
};

checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(jonas);
checkIn(flight, jonas);


const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const trasformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

trasformer('JavaScript is the best!', upperFirstWord);
trasformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Michael'].forEach(high5);


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greet('Hello')('Steven');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const greeterHeyArr = greetArr('Hey');
greeterHeyArr('Jonas');
greetArr('Hello')('Steven');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function () {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}-${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}-${flightNum}`, name });
  },
};

lufthansa.book(256, 'Mosabbir Rehan');
lufthansa.book(567, 'Rezwana Sarmin');

const euroWings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// Does NOT work
// book(897, 'Marry Cooper');

// call method
book.call(lufthansa, 897, 'Marry Cooper');
console.log(lufthansa);
book.call(euroWings, 317, 'David Cooper');
console.log(euroWings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
// apply method
const flightData = [125, 'Mosaraf Hossain'];
book.apply(swiss, flightData);
book.call(swiss, ...flightData);
console.log(swiss);
// bind method

const bookEW = book.bind(euroWings);
const bookLX = book.bind(swiss);
const bookLH = book.bind(lufthansa);

bookLH(1548, 'Harry Porter');

const bookEW58 = book.bind(euroWings, 58);
bookEW58('David Miller');

// With Event Listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));
// console.log(addVAT(23));

const addTax = function (rate) {
  return function (value) {
    return value + rate * value;
  };
};

const addVAT = addTax(0.23);
console.log(addVAT(100));
console.log(addVAT(23));
*/
/*
////////////////////////////
//// Coding Challenge #1
///////////////
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an 
array with the number of replies for each option. This data is stored in the starter 
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
method does 2 things:
1.1. Display a prompt window for the user to input the number of the 
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For 
example, if the option is 3, increase the value at position 3 of the array by 
1. Make sure to check if the input is a number and if the number makes 
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The 
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using 
console.log(). This should be the default option. If type is 'string', display a 
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test 
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll 
object! So what should the this keyword look like in this situation?
The Complete JavaScript Course 21
Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section �
GOOD LUCK �
 */
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let str = 'What is your favourite programming language?\n';
    for (const option of this.options) {
      str += option + '\n';
    }
    str += `(Write option number)`;
    let optionNumber = Number(prompt(str));
    if (
      typeof optionNumber === 'string' ||
      typeof optionNumber === NaN ||
      optionNumber > 3
    ) {
      console.log('Invalid input');
    } else {
      this.answers[optionNumber]++;
    }
  },
  displayResults(type) {},
};

// poll.registerNewAnswer();
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
