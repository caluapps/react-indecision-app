/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person_js__ = __webpack_require__(2);
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



console.log('is 6 adult: ', __WEBPACK_IMPORTED_MODULE_0__person_js__["b" /* isAdult */](6));
console.log('is 10 adult: ', __WEBPACK_IMPORTED_MODULE_0__person_js__["b" /* isAdult */](10));
console.log('is 15 adult: ', __WEBPACK_IMPORTED_MODULE_0__person_js__["b" /* isAdult */](15));
console.log('is 16 adult: ', __WEBPACK_IMPORTED_MODULE_0__person_js__["b" /* isAdult */](16));
console.log('is 21 adult: ', __WEBPACK_IMPORTED_MODULE_0__person_js__["b" /* isAdult */](21));

console.log('can 2 drink: ', __WEBPACK_IMPORTED_MODULE_0__person_js__["a" /* canDrink */](2));
console.log('can 9 drink: ', __WEBPACK_IMPORTED_MODULE_0__person_js__["a" /* canDrink */](9));
console.log('can 12 drink: ', __WEBPACK_IMPORTED_MODULE_0__person_js__["a" /* canDrink */](12));
console.log('can 15 drink: ', __WEBPACK_IMPORTED_MODULE_0__person_js__["a" /* canDrink */](15));
console.log('can 20 drink: ', __WEBPACK_IMPORTED_MODULE_0__person_js__["a" /* canDrink */](20));


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isAdult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canDrink; });
console.log('person.js');

const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 16;




/***/ })
/******/ ]);