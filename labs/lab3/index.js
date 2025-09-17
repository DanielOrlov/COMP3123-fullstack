const os = require('os');
const path = require('path');
const fs = require('fs');
const http = require('http');


// Custom modules
const arithmetic = require('./modules/Arithmetics.js'); //Custom module
//const {sum, sub} = require('./modules/Arithmetics.js');
const college = require('./modules/college.js');


// Global objects
global.message = "Hello World";
// console.log(global);
// console.log(console);
// console.log(__dirname); // Current directory
// console.log(__filename); // Current file
// console.log(process); // Info about env where the program is being executed
// console.log(Buffer); // Used to handle binary data

console.log(module);
console.log(arithmetic.add(5,3));
console.log(arithmetic.sub(5,3));