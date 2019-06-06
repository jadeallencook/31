const largestSet = require('./largest-set');
const cardValue = require('./card-value');

// hand [...cards] => index of smallest card
module.exports = hand => {
    const large = largestSet(hand);
    return output = (
        // check if cards are all same suit
        hand.reduce((boolean, card) => {
            return (card.suit !== hand[0].suit) ? false : boolean
        }, true)
    ) ? hand.reduce((small, card, index) => {
        return (
            cardValue(card.value) < cardValue(hand[small].value)
        ) ? index : small
    }, 0)
        : hand.reduce((small, card, index) => {
            return (
                card.suit !== large.suit &&
                (
                    (!small && small !== 0) ||
                    cardValue(card.value) < cardValue(hand[small].value)
                )
            ) ? index : small;
        }, null);
}