import { Card } from './card.model';

export class Hand {
    cards: Array<Card> = [];

    constructor(cards?: Card | Array<Card>) {
        if (Array.isArray(cards)) {
            this.cards = cards;
        } else if (cards) {
            this.cards.push(cards);
        }
    }

    dicard(index: number): Card {
        const card = this.cards[index];
        this.cards.splice(index, 1);
        return card;
    }

    points(): number {
        let object = { 'S': 0, 'C': 0, 'H': 0, 'D': 0 };
        this.cards.map(card => {
            object[card.suit] = object[card.suit] + card.value();
        });
        const suit = Object.keys(object).reduce((a, b) => object[a] > object[b] ? a : b);
        return object[suit];
    }

    validate(): boolean {
        // TODO: Invalid if array contains two of same card
        if (this.cards.length !== 3) {
            return false;
        } else {
            return true;
        }
    }

}
