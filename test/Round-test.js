const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let deck1;
  let deck2;
  let round1;
  let round2;


  beforeEach(() => {
    card1 = new Card(1, 'C-3P0 is fluent in how many languages?', ['twenty', 'one-hundred', 'sixty million'], 'sixty million');
    card2 = new Card(2, 'Who built C-3P0?', ['Anakin Skywalker', 'Yoda', 'Han Solo'], 'Anakin Skywalker');
    card3 = new Card(3, 'Who killed Han Solo?', ['Kylo Ren', 'Darth Vader', 'Yoda'], 'Kylo Ren');
    card4 = new Card(4, 'What species is Jabba?', ['Slug', 'Hutt', 'Alien'], 'Hutt');
    card5 = new Card(5, 'Who is the creator of Star Wars?', ['George Lucas', 'Harrison Ford', 'J. K. Rowling'], 'George Lucas');

    deck1 = new Deck([card1, card2, card3]);
    deck2 = new Deck([card4, card5]);

    round1 = new Round(deck1);
    round2 = new Round(deck2);

  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round1).to.be.an.instanceof(Round);
  });

  it('should be able to have a deck', () => {
    expect(round1.deck.cards).to.deep.equal(deck1.cards);
    expect(round1.deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should be able to have a different deck', () => {
    expect(round2.deck.cards).to.deep.equal(deck2.cards);
  });

  it('should start out with no turns', () => {
    expect(round1.turns).to.deep.equal(0);
  });

  it('should start out with no incorrectGuesses', () => {
    expect(round1.incorrectGuesses).to.deep.equal([]);
  });

  it('should be able to return the current card being played', () => {
    expect(round1.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should be able to return a different current card being played', () => {
    expect(round2.returnCurrentCard()).to.deep.equal(card4);
  });

  it('should be able to take a turn', () => {
    round1.takeTurn('sixty million');
    expect(round1.turns).to.equal(1);
  });

  it('should be able to take multiple turns', () => {
    round1.takeTurn('sixty million');
    round1.takeTurn('Han Solo');
    round1.takeTurn('Yoda');
    expect(round1.turns).to.equal(3);
  });

  it('should show the next card when a turn is taken', () => {
    expect(round1.returnCurrentCard()).to.deep.equal(card1);
    round1.takeTurn('sixty million');
    expect(round1.turns).to.equal(1);
    expect(round1.returnCurrentCard()).to.deep.equal(card2);
  });

  it('should be able to evaluate if a guess is correct', () => {
    expect(round1.takeTurn('sixty million')).to.equal('correct!');
    expect(round1.turns).to.equal(1);
  });

  it('should be able to evaluate if a guess is incorrect', () => {
    expect(round1.takeTurn('twenty')).to.equal('incorrect!');
    expect(round1.turns).to.equal(1);
  });

  it('should be able to store incorrect guesses', () => {
    expect(round1.takeTurn('twenty')).to.equal('incorrect!');
    expect(round1.incorrectGuesses.length).to.deep.equal(1);
    round1.takeTurn('Yoda');
    round1.takeTurn('Darth Vader');
    expect(round1.incorrectGuesses.length).to.deep.equal(3);
  });

  it('should store incorrect guesses by card id', () => {
    round1.takeTurn('twenty');
    round1.takeTurn('Yoda');
    expect(round1.incorrectGuesses[0]).to.deep.equal(1);
    expect(round1.incorrectGuesses[1]).to.deep.equal(2);
  });

  it('should be able to caculate the percentage of correct guesses', () => {
    round1.takeTurn('twenty');
    round1.takeTurn('Yoda');
    round1.takeTurn('Kylo Ren');

    expect(round1.calculatePercentCorrect()).to.deep.equal(33);
  });

  it('should be able to caculate the percentage of correct guesses of a different round', () => {
    round2.takeTurn('Hutt');
    round2.takeTurn('Harrison Ford');

    expect(round2.calculatePercentCorrect()).to.deep.equal(50);
  });
});