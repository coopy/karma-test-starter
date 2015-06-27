var expect = require('chai').expect;

var util = require('util');

describe('Util', function () {
  describe.only('sum', function () {

    it('should sum up positive numbers', function () {
      expect(util.sum(1, 1)).to.equal(2);
    });

    it('should sum up negative numbers', function () {
      expect(util.sum(-1, -1)).to.equal(-2);
    });
  });

});
