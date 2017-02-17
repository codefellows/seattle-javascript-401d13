'use strict';

// big-o notation is a way of describing the speed and memory useage of an algorithm - it is used to describe the worst case

// O(n) - n represents the number of items an algorithm has to work with
// O(n) - aka linear complexity

// DEMO: O(n)
// the following demo has an n of 4
// 4x is the maximum number of times the loop will run

var nums = [1, 2, 3, 4];

function contains(input, find) {
  for (let i=0; i < input.length; i++) {
    if (input[i] === find) return true;
  }
  return false;
};

console.log('contains 2:', contains(nums, 2)); // true - runs 2x
console.log('contains 8:', contains(nums, 8)); // false - runs 4x

// the following object has an n of 5

var colors = {
  red: '#ff0000',
  green: '00ff00',
  blue: '0000ff',
  white: 'ffffff',
  black: '000000',
};

// O(1) an algorithm that only runs one time no matter the size of the input
// O(1) - aka constant complexity

// DEMO: O(1)
function match(input, find) {
  if (input[find]) return true;
  return false;
};

console.log('matches red:', match(colors, 'red')); // true - runs 1x
console.log('matches orange:', match(colors, 'orange')); // false - runs 1x

// the following array has an n of 3
let dates = [
  new Date('03-12-1988'),
  new Date('12-10-2001'),
  new Date('06-13-2013')
];

// O(n^2) - runs n x n times in the worst case
// O(n^2) - aka quadratic complexity

// DEMO: O(n^2)
function selectionSort(array){
  // loop over the array
  for(let i=0; i<array.length; ++i){
    // set the min idx
    var minIndex = i;

    // create new loop to test against items in the array
    for(var j=i+1; j<array.length; ++j){
      // check if the item in our current loop is less than the item in the outer loop
      if(array[j] < array[minIndex]) {
        // if the item is less than the outer loop, it becomes the new minimum idx
        minIndex = j;
      };
    };

    // if the minimum index is not equal to our current idx
    if (minIndex != i){

      // swap the minimum value with the current value at i
      let tmp = array[i]; // create a tmp var to hold the current index
      array[i] = array[minIndex]; // set the current index equal to the minium idx
      array[minIndex] = tmp; // set the minimum index back to the original idx
    };
  };
  // return the sorted array
  return array;
}

console.dir(selectionSort(dates));

// O(log(n)) - each time an algorithm runs, it cuts the number of items it searches in half
// we'll be creating and working with binary search algorithm's in the coming weeks - for now, you can review
// the following demo to get a better idea of how all of this fits together:

// sortedNumbers has an "n" of 13
let sortedNumbers = [2, 5, 7, 10, 22, 23, 26, 32, 45, 67, 73, 84, 92];

// DEMO: O(log(n))
function binarySearch(array, find){
  // the binary search algorithm only works on sorted arrays
  // each time this algorithm runs it cuts the number of items it searchs in half
  // so with 8 items it will run 8 times then 4 times then 2 times then 1 time
  // so with 8 items it will run "log(8)" (aka 15) times
  // so with n items it will run "log(n)" times

  // TODO: comment this out and watch the array get cut in half each time through
  // console.log('cut in half:', array);
  if (array.length == 1)
    return array[0] === find ? true: false ;

  let startIndex = Math.floor(array.length /2);
  let current = array[startIndex];

  if (current > find) return binarySearch(array.slice(0, startIndex), find);
  if (current < find) return binarySearch(array.slice(startIndex), find);
  return true;
}

console.log('searching for 32:', binarySearch(sortedNumbers, 32));
console.log('searching for 100:', binarySearch(sortedNumbers, 100));
