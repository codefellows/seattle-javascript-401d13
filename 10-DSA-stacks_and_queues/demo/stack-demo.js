'use strict';

// stack constructor
function Stack() {
  this.length = 0;
};

// "push" an element to the top of the stack
Stack.prototype.push = function(value) {
  this[this.length++] = value;
  return this;
};

// "pop" the most recent element off of the stack
Stack.prototype.pop = function() {
  if (this.length === 0) return;
  var result = this[--this.length];
  delete this[this.length];
  return result;
};

// create new stack object
let nums = new Stack();

// add a sequence of elements to the stack
console.log('\npush 10:', nums.push(10));
console.log('push 20:', nums.push(20));
console.log('push 30:', nums.push(30));

// remove an element from the stack ("pop it off the stack")
console.log('\npop off the last item in the stack:', nums.pop(), 'popped of the stack');

// log the stack after popping off the most recently added item
console.log('\nnew stack:', nums, '\n');
