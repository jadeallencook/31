const largestSet = require('./largest-set');
const hands = require('../test.config');

for (let key of Object.keys(hands)) {
    const { cards, text, largest } = hands[key];
    const { suit, sum } = largest;
    test(`${text} => ${suit}${sum}`, () => {
        expect(largestSet(cards)).toMatchObject(largest);
    });
}