'use strict';

function bigNumber(num) {
  return new Promise(function(resolve, reject) {
    if (num < 100) {
      reject(new Error('expected a big number'));
    }
    
    if (num > 100) {
      return resolve(num);
    }
  });
};

function success(result) {
  console.log('result:', result);
};

function throwError(error) {
  console.log('error:', error);
};

// resolved:
bigNumber(200).then(success).catch(throwError);

// rejected:
bigNumber(10).then(success).catch(throwError);
