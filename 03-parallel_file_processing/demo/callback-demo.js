'use strict';

/* =====  standard callback pattern  ===== */

var someCallback = function(data) {
  console.log('got some data:', data);
};

var useCallback = function(cb) {
  cb('the data i wanted to get');
};

/* =====  refactored "error first" callback pattern  ===== */

var someCallback = function(err, data) {
  if (err) throw err;
  console.log('got some data:', data);
};

var useCallback = function(cb) {
  cb(null, 'the data i wanted to get')
};

/* =====  same as above - with a simulated error  ===== */

var someCallback = function(err, data) {
  if (err) throw err;
  console.log('got some data:', data);
}

var useCallback = function(cb) {
  var sampleError = new Error('throwing a sample error');
  cb(sampleError, 'the data i wish i got');
}

// useCallback(someCallback);
