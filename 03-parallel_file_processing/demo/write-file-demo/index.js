'use strict';

const fs = require('fs');

fs.readFile(`${__dirname}/data/data.txt`, function(err, data) {
  if (err) throw err;
  console.log('content of original file:', data.toString());

  fs.writeFile(`${__dirname}/data/new-data.txt`, data, function(err, data) {
    if (err) throw err;
    console.log('write file msg:', 'new file created');
  });
});
