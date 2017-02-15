'use strict';

// REMEMBER: objects are passed by reference

// create a sample course object literal
const course = { title: 'Code 401 JS', instructor: 'Brian' };

// call our logger function to update the title property of our course object
logger(course);

// check our course object to ensure that the title is updated
console.log('course:', course);

// create a logger function that updates the original object title
function logger(c) {
  // c is a reference to our original course object
  c.title = 'Code 401 Python'
  // log the value of the passed in object after updating it's title property
  console.log('logger:', c);
};
