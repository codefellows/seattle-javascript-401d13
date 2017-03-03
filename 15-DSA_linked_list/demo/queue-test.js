const Queue = require('./queue');

let q = new Queue();
q.enqueue('good');
q.enqueue('night');
q.enqueue('moon');
q.enqueue('good');
q.enqueue('night');
q.enqueue('great');
q.enqueue('green');
q.enqueue('room');

console.assert(q.dequeue() == 'good', 'Dequeued unexpected value');
console.assert(q.dequeue() == 'night', 'Dequeued unexpected value');
console.assert(q.dequeue() == 'moon', 'Dequeued unexpected value');

q.enqueue('by')
q.enqueue('margret')
q.enqueue('wise')
q.enqueue('brown')

console.assert(q.dequeue() == 'good', 'Dequeued unexpected value');
console.assert(q.dequeue() == 'night', 'Dequeued unexpected value');
console.assert(q.dequeue() == 'great', 'Dequeued unexpected value');
console.assert(q.dequeue() == 'green', 'Dequeued unexpected value');
console.assert(q.dequeue() == 'room', 'Dequeued unexpected value');

console.assert(q.dequeue() == 'by', 'Dequeued unexpected value');
console.assert(q.dequeue() == 'margret', 'Dequeued unexpected value');
console.assert(q.dequeue() == 'wise', 'Dequeued unexpected value');
console.assert(q.dequeue() == 'brown', 'Dequeued unexpected value');

console.log('Hooray! All tests pass!');
