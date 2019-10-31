import { Suit } from '../types/suit.type';
import { Face } from '../types/face.type';

export class Card {
    suit: Suit;
    face: Face;

    constructor(suit: Suit, face: Face) {
        this.suit = suit;
        this.face = face;
    }

    value(): number {
        const JQK: Array<Face> = ['J', 'Q', 'K'];
        if (JQK.indexOf(this.face) >= 0) {
            return 10;
        } else if (this.face === 'A') {
            return 11;
        } else if (this.face >= 2 && this.face <= 10) {
            return Number(this.face);
        } else {
            return 0;
        }
    }
}
