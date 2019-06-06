const cardValue = require('./card-value');

// hand [...cards] => { suite, value, hand }
module.exports = hand => {
    let map = {};
    for (let index = 0, max = hand.length; index < max; index++) {
        let card = hand[index];
        card.index = index;
        const { suit, value } = card;
        if (!map[suit]) { 
            map[suit] = {
                cards: [card],
                value: cardValue(value)
            };
        } else {
            map[suit] = {
                cards: [...map[suit].cards, card],
                value: map[suit].value + cardValue(value)
            };
        }
    }
    return Object.keys(map).reduce((object, suit, index) => {
        const store = map[suit];
        const { value, cards } = store;
        if (!index || object.sum < value) {
            object.suit = suit;
            object.sum = cardValue(value);
            object.cards = cards;
        }
        return object;
    }, {});
}