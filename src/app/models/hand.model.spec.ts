import { Hand } from './hand.model';
import { Card } from './card.model';

const dq = new Card('D', 'Q');
const dk = new Card('D', 'K');
const dj = new Card('D', 'J');
const da = new Card('D', 'A');

describe('Hand', () => {
  it('should create empty hand', () => {
    expect(new Hand()).toBeTruthy();
  });

  it('should create hand with one card', () => {
    expect(new Hand(dq).cards[0]).toEqual(dq);
  });

  it('should create hand with multiple cards', () => {
    expect(new Hand([dq, dk, dj]).cards).toEqual([dq, dk, dj]);
  });

  it('3 cards should create an valid hand', () => {
    expect(new Hand([dq, dk, dj]).validate()).toEqual(true);
  });

  it('3 cards with 2 of the same should create an invalid hand', () => {
    expect(new Hand([dq, dq, dj]).validate()).toEqual(false);
  });

  it('4 cards should create an invalid hand', () => {
    expect(new Hand([dq, dk, dj, da]).validate()).toEqual(false);
  });
});
