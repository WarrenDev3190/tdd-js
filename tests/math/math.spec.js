const expect = require('chai').expect;

const math = require('../../src/math/index');

describe('math', function () {
  it('should do basic additon', function () {
    expect(math.add(1,2)).to.eql(3);
  });
});
