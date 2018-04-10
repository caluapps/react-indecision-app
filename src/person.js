console.log('person.js');

const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 16;
export default (age) => age >= 65;

export { isAdult, canDrink };
