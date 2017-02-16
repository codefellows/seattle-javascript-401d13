'use strict'

const expect = require('chai').expect;
const readFileHelper = require('../lib/read-file-helper.js');

describe('testing module readFileHelper', function(){
  describe('with bad file paths', function(){
    it('should return an error', function(){
      readFileHelper([`${__dirname}/dont-exist.txt`], function(err){
        expect(!!err).to.equal(true);
      });
    });
  });

  describe('with good file paths', function() {
    before((done) => {
      this.paths = [
        `${__dirname}/../data/one.txt`,
        `${__dirname}/../data/two.txt`,
        `${__dirname}/../data/three.txt`,
      ];
      done();
    });

    it('have correct order of hex strings', (done) =>  {
      var expextedResult = [ '3120636f6e74656e', '3220636f6e74656e', '3320636f6e74656e' ];
      readFileHelper(this.paths, function(err, data){
        expect(err).to.equal(null);
        expect(data[0]).to.equal(expextedResult[0]);
        expect(data[1]).to.equal(expextedResult[1]);
        expect(data[2]).to.equal(expextedResult[2]);
        console.log('data', data);
        done();
      });
    });
  });
});
