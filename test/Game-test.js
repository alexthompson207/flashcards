const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('../src/data');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be a an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should create cards for the game from data file', () => {
    const prototypeQuestions = data.prototypeData;
    game.createCards();

    expect(game.cards).to.be.an('array');
    expect(game.cards).to.deep.equal(prototypeQuestions);
  });

  it('should create new Card instances for each card', () => {
    game.createCards();

    game.cards.forEach(card => {
      expect(card).to.be.an.instanceof(Card);
    });
  });

  it('should put all cards in a deck', () => {
    game.createCards();
    game.createDeck();

    expect(game.deck.cards.length).to.be.deep.equal(30);
    expect(game.deck.countCards()).to.be.deep.equal(30);
  });

  it('should create a new Deck instance', () => {
    game.createDeck();

    expect(game.deck).to.be.an.instanceof(Deck);
  });

  it('should create a new Round instance from the Deck instantiation', () => {
    game.createCards();
    game.createDeck();
    game.createRound();

    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it('should keep track of the current round', () => {
    const prototypeQuestions = data.prototypeData;

    game.start();

    expect(game.currentRound).to.be.an.instanceof(Round);
    expect(game.currentRound.deck.cards).to.deep.equal(prototypeQuestions);
  });
});