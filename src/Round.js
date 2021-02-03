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
    const turn = new Turn(guess, currentCard);
    this.turns++;
    this.deck.cards.shift();
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(currentCard.id)
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const percentIncorrect = Math.ceil((this.incorrectGuesses.length / this.turns) * 100);
    const percentCorrect = 100 - percentIncorrect;
    return percentCorrect;
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;