const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    //maybe combined line 15 and 17?
    const turn = new Turn(guess, currentCard);
    this.turns++;
    this.deck.cards.shift();
    return turn.giveFeedback();
  }
}

module.exports = Round;