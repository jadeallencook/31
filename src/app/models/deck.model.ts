import { Card } from './card.model';
import { faces } from '../data/faces.data';
import { suits } from '../data/suits.data';

export class Deck {
    cards: Array<Card> = [];

    constructor() {
        suits.map(suit => {
            faces.map(face => {
                this.cards.push(new Card(suit, face));
            });
        });
    }

    shuffle(): void {
        for (let index = this.cards.length - 1; index > 0; index--) {
            const random = Math.floor(Math.random() * (index + 1));
            [this.cards[index], this.cards[random]] = [this.cards[random], this.cards[index]];
        }
    }

    draw(): Card {
        return this.cards.shift();
    }
}
