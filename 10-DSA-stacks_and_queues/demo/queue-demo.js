'use strict';

// queue constructor
function Queue() {
  this.next = null;
  this.length = 0;
};

// add an element to the queue
Queue.prototype.enqueue = function(value) {
  this[this.length] = value;
  if (!this.next) this.next = 0;
  this.length++;
};

// remove the first element from the queue
Queue.prototype.dequeue = function() {
  if (this.length === 0) return;
  --this.length;
  let result = this[this.next];
  delete this[this.next];
  this.next++;
  return result;
};

// create new queue object
let nums = new Queue();

// add a sequence of elements to the queue
nums.enqueue('first');
nums.enqueue('second');
nums.enqueue('third');

// log the current nums queue
console.log('\nnums queue:', nums);

// remove an element from the queue
console.log('\nremoved the', nums.dequeue(), 'element from the queue\n');

// show queue after removal
console.log('new queue:', nums);

// remove another element from the queue
console.log('\nremoved the', nums.dequeue(), 'element from the queue\n');

// show queue after removal
console.log('new queue:', nums, '\n');
