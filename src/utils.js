console.log('utils.js is running');

export const square = (x) => x * x;
export const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

export default subtract; // es muss ein Statement sein
/*  zb
    export default (a, b) => a - b;
*/

// export { square, add, subtract as default };
// export - default export - named exports
