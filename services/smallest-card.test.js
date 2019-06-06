const smallestCard = require('./smallest-card');
const hands = require('../test.config');

for (let key of Object.keys(hands)) {
    const { cards, smallest, text } = hands[key];
    const { suit, value } = cards[smallest];
    const string = `${suit}${value}`;
    test(`${text} => ${string}[${smallest}]`, () => {
        expect(smallestCard(cards)).toBe(smallest);
    });
}