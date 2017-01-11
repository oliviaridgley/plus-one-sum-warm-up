'use strict';

var plusOneSum = require('./main');
require('chai');
var assert = require('assert');


describe('plusOneSum', function() {
  describe('Calling plusOneSum :', function() {
    it('should return one integer when given an array', function() {
      assert.equal(14, plusOneSum([1, 2, 3, 4]));
    });

    it('Should return "Argument is not a valid array" if given bad parameter', function() {
      assert.equal("Argument is not a valid array", plusOneSum("string"));
    });

    it('Should return "Argument is not a valid array" if given bad parameter', function() {
      assert.equal("Argument is not a valid array", plusOneSum(1, 3));
    });

    it('Should return "Argument is not a valid array" if given bad parameter', function() {
      assert.equal("Argument is not a valid array", plusOneSum([]));
    });

    it('Should return "Array contains bad input" if given bad parameter', function() {
      assert.equal("Array contains bad input", plusOneSum([1, 'One', 2, 'Cat']));
    });
  });
});
