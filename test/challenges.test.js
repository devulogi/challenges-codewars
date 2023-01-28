const { describe, it } = require('mocha');
const chai = require('chai');
const expect = chai.expect;

const { evenOrOdd } = require('../challenges/EvenOrOdd');

describe('EvenOrOdd', () => {
  it('should return "Even" for even numbers', () => {
    expect(evenOrOdd(0)).to.equal('Even');
    expect(evenOrOdd(2)).to.equal('Even');
    expect(evenOrOdd(-4)).to.equal('Even');
  });
  it('should return "Odd" for odd numbers', () => {
    expect(evenOrOdd(7)).to.equal('Odd');
    expect(evenOrOdd(1)).to.equal('Odd');
    expect(evenOrOdd(-7)).to.equal('Odd');
  });
});
