'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 1, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// replacing
const priceGB = '277,18€';
const priceUS = priceGB.replace(',', '.').replace('€', '$');
console.log(priceUS);

const announcement = `All passengers come to boarding door 23. Boarding door 23.`;
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('Air'));
console.log(plane.endsWith('neo'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log(`part of the NEW Airbus family.`);
}

// Practice example
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are NOT allowed on board`);
  } else {
    console.log(`Welcome abroad!`);
  }
};

checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('socks and camera');
checkBaggage('Got some snacks and a gun for protection');

/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Correct passenger name
const passenger = 'jOnAS';
const passengerFirstLetterUpper = passenger[0].toUpperCase();
const passengerCorrect =
  passengerFirstLetterUpper + passenger.slice(1).toLowerCase();
console.log(passengerCorrect);

// Comparing emails
const email = 'jonas@gmail.com';
const loginEmail = '    JonaS@gmaiL.Com \n';

const emailCorrect = loginEmail.trim().toLowerCase();
console.log(emailCorrect);
console.log(email === emailCorrect);
*/
/*
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B727'[0]);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Por'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(1, -1));
console.log(airline.slice(-1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'E' || s === 'B') console.log(`You got the middle seat 😒`);
  else console.log(`You got lucky 🥰`);
};

checkMiddleSeat('11B');
checkMiddleSeat('23E');
checkMiddleSeat('5C');

console.log(new String('Jonas'));
console.log(typeof new String('Jonas'));
console.log(typeof new String('Jonas').slice(-1));
*/
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try it again!'],
]);

// Convert object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}

// const answer = Number(prompt('Your answer: '));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('Correct') === answer));
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/
/*
const rest = new Map();
rest
  .set('name', 'Classico Italiano')
  .set(1, 'Firenze, Italy')
  .set(2, 'Lisbon, Portugal')
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 9)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get(true));
console.log(rest.get('categories'));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
console.log(rest.size);
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);
*/
/*
const orderSet = new Set(['Pizza', 'Pasta', 'Risotto', 'Pasta', 'Pizza']);
console.log(new Set('Rehan'));
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
console.log(orderSet.add('Garlic Bread'));
console.log(orderSet.add('Noodles'));
orderSet.delete('Pizza');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const positions = ['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef', 'Waiter'];
const positionsUnique = [...new Set(positions)];
console.log(positionsUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef', 'Waiter']).size
);
console.log(new Set('rehanmosabbir').size);

// property Keys
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days - `;

for (const day of Object.keys(openingHours)) {
  // console.log(day);
  openStr += `${day}, `;
}
console.log(openStr);

// property Values
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}
*/
/*
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
// Methods
console.log(restaurant.order?.(1, 1) ?? 'Method does not exist.');
console.log(restaurant.orderRisotto?.(1, 1) ?? 'Method does not exist.');

console.log(restaurant.orderRisotto?.(1, 1));
// Arrays
// const users = [{ name: 'Jonas', email: 'user@jonas.io' }];
const users = [];
console.log(users[0]?.name ?? 'Users array empty.');
if (users.length > 0) console.log(users[0].name);
else console.log('Users array empty.');

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const [i, el] of menu.entries()) console.log(`${i + 1} : ${el}`);

// console.log([...menu.entries()]);
*/
/*
const res1 = {
  name: 'Capri',
  numGuests: 0,
};
const res2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// res1.numGuests = res1.numGuests || 10;
// res2.numGuests = res2.numGuests || 10;
// OR assignment operator
// res1.numGuests ||= 10;
// res2.numGuests ||= 10;
// Nullish assignment operator (null or undefined)
res1.numGuests ??= 10;
res2.numGuests ??= 10;
// AND assignment operator
// res1.owner = res1.owner && '<ANNONYMOUS>';
// res2.owner = res2.owner && '<ANNONYMOUS>';
res1.owner &&= '<ANNONYMOUS>';
res2.owner &&= '<ANNONYMOUS>';
console.log(res1);
console.log(res2);
*/
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
// Nullish : null , undefined (NOT 0 and '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/
/*
/////////////////////////////////
// Short Circuiting
///////////

// use any data type, return any data type, short-circuiting

console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(undefined || null);
console.log(true || NaN);

console.log(undefined || false || '' || 'Hello' || 23 || null);

console.log('---- OR ----');
restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('---- AND ----');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('jonas' && 7 && null && true && undefined);

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'onions', 'spinach', 'beef');
}

restaurant.orderPizza &&
  restaurant.orderPizza('mushrooms', 'onions', 'spinach', 'beef');
*/
//////////////////////////////////
//// REST pattern and parameters
//////////////
/*
// 1. Destructuring

// SPREAD, because on RIGHT side on =
const arr = [1, 2, 3, ...[4, 5]];
console.log(arr);
// REST, because on LEFT side on =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 4, 5);
add(2, 3, 4, 5, 6, 7);

const x = [5, 7, 8, 9];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'spinach', 'beef');
restaurant.orderPizza('mushrooms');
*/
///////////////////////////////////////
//////// The spread operator (...)
////////////////////
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
console.log(1, 2, 7, 8, 9);
const newMainMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMainMenu);
console.log(...newMainMenu);

// copying arrays
const mainMenu = [...restaurant.mainMenu];
console.log(mainMenu);
// join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterable : strings, arrays, maps, sets. NOT objects
const str = 'Jonas';
console.log([...str, 'S.']);
console.log(...str);
console.log('J', 'o');
// console.log(`${...str} schedtmann`);

// Real-world example

const ingredients = [
  prompt("Let's make pasta. Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects

const restaurantNew = { foundedIn: '1985', ...restaurant, founder: 'Guiseppe' };
console.log(restaurantNew);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant);
console.log(restaurantCopy);
*/
////////////////////////////////
//////// Destructuring objects
///////////////
/*
restaurant.orderDelivery({
  time: '20:30',
  address: 'Via del Sole, 21',
  starterIndex: 2,
  mainIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
});




const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], mainMenu: main = [] } = restaurant;
console.log(menu, main);

// Mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 46, c: 69 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
////////////////////////////////
//////// Destructuring arrays
///////////////
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const [i, , [j, k]] = [2, 3, [4, 5]];
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
*/

/*
//////////////////////////////
////// Coding Challenge #1
//////////////

We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and 
'players2')
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players
3. Create an array 'allPlayers' containing all players of both teams (22 
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored
GOOD LUCK �
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);
// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// 5.
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
// 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
// 7.
// console.log(team1 < team2 ? game['team1'] : game['team2']);
console.log(team1 < team2 && `${game['team1']} is more likely to win.`);
console.log(team1 > team2 && `${game['team2']} is more likely to win.`);
*/

/*
////////////////////////////////
///// Coding Challenge #2
//////////////

Let's continue with our football betting app! Keep using the 'game' variable from 
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK �
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [i, playerName] of game.scored.entries()) {
  console.log(`Goal ${i + 1} : ${playerName}`);
}
// 2.
let sum = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  sum += odd;
}
console.log(sum / odds.length);

// 3.
const entries = Object.entries(game.odds);
for (const [key, value] of entries) {
  // console.log(key, value);
  let str = `Odd of `;
  key !== 'x'
    ? console.log((str += `victory ${game[key]} : ${value}`))
    : console.log((str += `draw : ${value}`));
}

// BONUS :
const scorers = {};
for (const scorer of game.scored) {
  if (scorers[scorer]) {
    scorers[scorer]++;
  } else {
    scorers[scorer] = 1;
  }
}

console.log(scorers);
*/

/*
//////////////////////////////////
/////////// Coding Challenge #3
//////////////////

Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no 
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
GOOD LUCK �
*/
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// 1.
const arr = [];
for (const [key, value] of gameEvents) {
  arr.push(value);
}
const events = [...new Set(arr)];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(`"An event happened, on 
average, every ${90 / gameEvents.size} minutes"`);

// 4.
for (const [key, value] of gameEvents) {
  key <= 45
    ? console.log(`[FIRST HALF] ${key} : ${value}`)
    : console.log(`[SECOND HALF] ${key} : ${value}`);
}
*/
