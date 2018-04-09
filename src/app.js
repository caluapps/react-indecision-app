// import './utils.js';
// import { square, add } from './utils.js';
//
// console.log('app.js is running');
// console.log(square(3));
// console.log(add(2, 5));

// person.js
// named export isAdult(18) - true if adult, otherwise false
// named export canDrink(18) - true if 21 and over, otherwise false

// import isAdult and canDrink
// use both printing result to the console

import { isAdult, canDrink } from './person.js';

console.log('is 6 adult: ', isAdult(6));
console.log('is 10 adult: ', isAdult(10));
console.log('is 15 adult: ', isAdult(15));
console.log('is 16 adult: ', isAdult(16));
console.log('is 21 adult: ', isAdult(21));

console.log('can 2 drink: ', canDrink(2));
console.log('can 9 drink: ', canDrink(9));
console.log('can 12 drink: ', canDrink(12));
console.log('can 15 drink: ', canDrink(15));
console.log('can 20 drink: ', canDrink(20));
