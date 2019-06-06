# 31

The goal is to obtain a hand that totals 31 in cards of one suit; or to have a hand at the showdown whose count in one suit is higher than that of any other player. An Ace counts 11 points, face cards count 10 points, and all other cards count their face value.

### How To Play

The players cut for deal and the lowest card deals, the turn to deal alternates to the left. Three cards are dealt face down to each player, then one card is dealt face up. Before play begins, all players put an equal amount of chips into a pot. The player on the dealer's left has the first turn. On each turn, a player may take one card from the widow and replace it with one card from their hand. Players take turns, clockwise around the table, until one player is satisfied that the card values they hold will likely beat the other players. A player indicates this by "knocking" on the table. All other players then get one more turn to exchange cards. Then there is a showdown in which the players reveal their hands and compare values. If a player knocks before the first round of exchanges have begun, the showdown occurs immediately with no exchange of cards.

### Models

```js
value: [1-10, 'A', 'J', 'Q', 'K'];
suit: ['D', 'H', 'C', 'S'];
card: { value, suit, ?index };
hand: [...cards];
```

### Services

```js
getCardValue(value) => 2-11
getSetValue(hand) => 0-31
sortHand(hand) => { 'D': 0-31, 'H': 0-31, 'C': 0-31, 'S': 0-31 }
largestSet(hand) => { suite, value, hand }
largestCard(hand) => card
smallestCard(hand) => card
shuffleCards(hand) => hand
```