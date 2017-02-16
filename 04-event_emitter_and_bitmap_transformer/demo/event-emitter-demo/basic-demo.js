'use strict';

const EE = require('events');
const ee = new EE();

ee.on('customEvent', function() {
  console.log('msg:', 'custom event fired!');
});

// ee.emit('customEvent');

ee.on('anotherCustomEvent', function() {
  ee.emit('customEvent');
  console.log('msg:', 'another custom event also fired');
});

// ee.emit('anotherCustomEvent');
