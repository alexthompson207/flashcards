const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

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

  it('should create cards for the game', () => {
    game.createCards();
    expect(game.cards).to.be.an('array');
    expect(game.cards.length).to.deep.equal(30);
  });

})