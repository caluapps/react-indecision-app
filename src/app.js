// import './utils.js';
// import subtract, { square, add } from './utils.js';
//
// console.log('app.js is running');
// console.log(square(3));
// console.log(add(2, 5));
// console.log(subtract(100, 20));

// person.js
// named export isAdult(18) - true if adult, otherwise false
// named export canDrink(18) - true if 21 and over, otherwise false

// import isAdult and canDrink
// use both printing result to the console

import isSenior, { isAdult, canDrink } from './person.js';

console.log('--- isAdult');
console.log('is 6 adult: ', isAdult(6));
console.log('is 10 adult: ', isAdult(10));
console.log('is 15 adult: ', isAdult(15));
console.log('is 16 adult: ', isAdult(16));
console.log('is 21 adult: ', isAdult(21));

console.log('--- canDrink');
console.log('can 2 drink: ', canDrink(2));
console.log('can 9 drink: ', canDrink(9));
console.log('can 12 drink: ', canDrink(12));
console.log('can 15 drink: ', canDrink(15));
console.log('can 20 drink: ', canDrink(20));

console.log('--- isSenior');
console.log('is 65 Senior: ', isSenior(65));
console.log('is 33 Senior: ', isSenior(33));
console.log('is 27 Senior: ', isSenior(27));
console.log('is 75 Senior: ', isSenior(75));

// Setting the default export and function
// Grab the default and call it
