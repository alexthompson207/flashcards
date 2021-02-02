const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {
  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let deck1;
  let deck2;

  beforeEach(() => {
    card1 = new Card(1, 'C-3P0 is fluent in how many languages?', ['twenty', 'one-hundred', 'sixty million'], 'sixty million');
    card2 = new Card(2, 'Who built C-3P0?', ['Anakin Skywalker', 'Yoda', 'Han Solo'], 'Anakin Skywalker');
    card3 = new Card(3, 'Who killed Han Solo?', ['Kylo Ren', 'Darth Vader', 'Yoda'], 'Kylo Ren');
    card4 = new Card(4, 'What species is Jabba?', ['Slug', 'Hutt', 'Alien'], 'Slug');
    card5 = new Card(5, 'Who is the creator of Star Wars?', ['George Lucas', 'Harrison Ford', 'J. K. Rowling'], 'George Lucas');

    deck1 = new Deck([card1, card2, card3]);
    deck2 = new Deck([card4, card5]);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck1).to.be.an.instanceof(Deck);
  });

  it('should be able to hold cards', () => {
    expect(deck1.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should be able to hold different cards', () => {
    expect(deck2.cards).to.deep.equal([card4, card5]);
  });

  it('should be able to count its cards', () => {
    expect(deck1.countCards()).to.equal(3);
  });

  it('should be able to count different cards', () => {
    expect(deck2.countCards()).to.equal(2);
  });

})