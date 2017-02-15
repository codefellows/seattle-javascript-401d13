'use strict';

// REMEMBER: primitive data types are passed by value (string, number, boolean)

// create a sample number
const num = 1;

// call our logger function and return a new number
logger(num);

// check the value of num after we call our logger function
// notice that the value is the same as what we declared above
console.log('num:', num);

// create a logger function that creates a new number/value
// this showcases that there is no reference to the original number
function logger(num) {
  // increment the number
  num += 1;
  // log the output of our number
  console.log('logger:', num);
};
