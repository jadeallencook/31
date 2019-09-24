import { Deck } from './deck.model';

describe('Deck', () => {
  it('should create a deck of 52 cards', () => {
    expect(new Deck().cards.length).toEqual(52);
  });
  it('should shuffle cards in deck', () => {
    const shuffled = new Deck();
    shuffled.shuffle();
    expect(shuffled.cards).not.toEqual(new Deck().cards);
  });
});
