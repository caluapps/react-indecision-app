/* install -> import -> use
import validator from 'validator';

console.log(validator.isEmail('test'));
console.log(validator.isEmail('office@calu-apps.at'));
console.log(validator.isEmail('a@a.a'));
console.log(validator.isEmail('a@abc.at'));
*/

// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom'

const template = <p>This is JSX from Webpack</p>
ReactDOM.render(template, document.getElementById('app'));
