const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Game {
  constructor() {
    this.currentRound;
    this.deck;
    this.cards = [];
  }

  start() {

    this.printMessage();
    this.printQuestion();
  }

  createCards() {
    prototypeQuestions.forEach(card => {
      this.cards.push(new Card(card.id, card.question,
        card.answers, card.correctAnswer));
    })
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;