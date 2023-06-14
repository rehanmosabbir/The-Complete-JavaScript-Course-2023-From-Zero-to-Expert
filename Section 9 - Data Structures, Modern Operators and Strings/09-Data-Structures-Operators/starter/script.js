'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
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
