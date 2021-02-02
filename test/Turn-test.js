const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card1;
  let turn1;
  let turn2;

  beforeEach(() => {
    card1 = new Card(1, 'C-3P0 is fluent in how many languages?', ['twenty', 'one-hundred', 'sixty million'], 'sixty million');
    card2 = new Card(2, 'Who built C-3P0?', ['Anakin Skywalker', 'Yoda', 'Han Solo'], 'Anakin Skywalker');

    turn1 = new Turn('twenty', card1);
    turn2 = new Turn('sixty million', card1);
    turn3 = new Turn('Anakin Skywalker', card2);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it.skip('should be able to keep a guess', () => {
    expect(turn1.guess).to.equal('twenty);
  });

  it.skip('should be able to keep a different guess', () => {
    expect(turn2.guess).to.equal('sixty million');
  });

  it.skip('should use a card', () => {
    expect(turn1.card).to.equal(card1);
  });

  it.skip('should be able to use a different card', () => {
    expect(turn1.card).to.equal(card1);
  });

});