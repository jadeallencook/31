import { Card } from './card.model';
import { Face } from '../types/face.type';
import { suits } from '../data/suits.data';

const faces: Array<{
  face: Face,
  value: Number
}> = [
    { face: 2, value: 2 },
    { face: 3, value: 3 },
    { face: 4, value: 4 },
    { face: 5, value: 5 },
    { face: 6, value: 6 },
    { face: 7, value: 7 },
    { face: 8, value: 8 },
    { face: 9, value: 9 },
    { face: 10, value: 10 },
    { face: 'J', value: 10 },
    { face: 'Q', value: 10 },
    { face: 'K', value: 10 },
    { face: 'A', value: 11 }
  ];

describe('Card', () => {
  suits.map(suit => {
    faces.map(card => {
      const { face, value } = card;
      it(`${face}${suit} should equal ${value}`, () => {
        expect(new Card(suit, face).value()).toEqual(value);
      })
    });
  });
});
