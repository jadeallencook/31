const suits = ['D', 'H', 'C', 'S'];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

let cards = {};
for (let suit of suits) {
    cards[suit] = {};
    for (let value of values) {
        cards[suit][value] = {
            suit: suit,
            value: value
        }
    }
}

let hands = {};

hands['default'] = {
    text: '[D4, C5, D6, S7]',
    smallest: 1,
    largest: {
        suit: 'D',
        sum: 10,
        cards: [
            {
                ...cards['D'][4],
                index: 0
            }, {
                ...cards['D'][6],
                index: 2
            }
        ]
    },
    cards: [
        cards['D'][4],
        cards['C'][5],
        cards['D'][6],
        cards['S'][7]
    ]
};

hands['same-suits'] = {
    text: '[D6, D5, D4, D7]',
    smallest: 2,
    largest: {
        suit: 'D',
        sum: 22,
        cards: [
            {
                ...cards['D'][6],
                index: 0
            }, {
                ...cards['D'][5],
                index: 1
            }, {
                ...cards['D'][4],
                index: 2
            }, {
                ...cards['D'][7],
                index: 3
            }
        ]
    },
    cards: [
        cards['D'][6],
        cards['D'][5],
        cards['D'][4],
        cards['D'][7]
    ]
};

hands['different-suits'] = {
    text: '[D4, C5, H6, S7]',
    smallest: 0,
    largest: {
        suit: 'S',
        sum: 7,
        cards: [
            {
                ...cards['S'][7],
                index: 3
            }
        ]
    },
    cards: [
        cards['D'][4],
        cards['C'][5],
        cards['H'][6],
        cards['S'][7]
    ]
};

hands['winner'] = {
    text: '[DQ, DK, D1, HJ]',
    smallest: 3,
    largest: {
        suit: 'D',
        sum: 31,
        cards: [
            {
                ...cards['D']['Q'],
                index: 0
            }, {
                ...cards['D']['K'],
                index: 1
            }, {
                ...cards['D'][1],
                index: 2
            }, 
        ]
    },
    cards: [
        cards['D']['Q'],
        cards['D']['K'],
        cards['D'][1],
        cards['H']['J']
    ]
};

hands['winner-with-extra'] = {
    text: '[D1, DQ, DK, DJ]',
    smallest: 1,
    largest: {
        suit: 'D',
        sum: 41,
        cards: [
            {
                ...cards['D'][1],
                index: 0
            }, {
                ...cards['D']['Q'],
                index: 1
            }, {
                ...cards['D']['K'],
                index: 2
            }, {
                ...cards['D']['J'],
                index: 3
            }
        ]
    },
    cards: [
        cards['D'][1],
        cards['D']['Q'],
        cards['D']['K'],
        cards['D']['J']
    ]
};

module.exports = hands;