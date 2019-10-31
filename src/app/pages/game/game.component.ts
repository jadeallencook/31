import { Component, OnInit } from '@angular/core';
import { Deck } from '../../models/deck.model';
import { Hand } from 'src/app/models/hand.model';
import { Card } from '../../models/card.model';
import * as instructions from '../../../assets/instructions.json';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  /*
    who's turn it is
    0: is player's turn
    1-3: opponent's turn
  */
  turn: number = 0;
  /*
    step in turn
    0: draw/pickup
    1: discard
  */
  step: number = 0;
  // deck of 52 cards
  deck = new Deck();
  // discard pile
  discard: Array<Card> = [];
  // player's hands
  player = new Hand();
  opponent1 = new Hand();
  opponent2 = new Hand();
  opponent3 = new Hand();
  // instructions to guide player
  history: string = 'Loading...';

  constructor() {
    this.deck.shuffle();
    this.deal();
  }

  deal(): void {
    for (let index = 0; index < 3; index++) {
      this.player.cards.push(this.deck.draw());
      this.opponent1.cards.push(this.deck.draw());
      this.opponent2.cards.push(this.deck.draw());
      this.opponent3.cards.push(this.deck.draw());
    }
    this.discard.push(this.deck.draw());
    this.history = instructions.player['init'];
  }

  draw(): void {
    if (this.step === 0 && this.turn === 0) {
      this.player.cards.push(this.deck.draw());
      const card = this.player.cards[3];
      this.history = instructions.player['draw']
        .replace('{{card}}', `${card.face}${card.suit}`);
      this.step++;
    } else {
      this.history = instructions.player['no-discard'];
    }
  }

  pickup(): void {
    if (this.step === 0 && this.turn === 0) {
      this.player.cards.push(this.discard[0]);
      this.discard.pop();
      const card = this.player.cards[3];
      this.history = instructions.player['pickup']
        .replace('{{card}}', `${card.face}${card.suit}`);
      this.step++;
    } else {
      this.history = instructions.player['no-discard'];
    }
  }

  knock(): void {
    console.log('knock');
  }

  dispose(index: number): void {
    console.log(this)
    if (this.step === 1 && this.turn === 0) {
      const card = this.player.dicard(index);
      this.discard.unshift(card);
      this.turn++;
      this.step--;
      this.history = instructions.player['discard']
        .replace('{{card}}', `${card.face}${card.suit}`)
        .replace('{{number}}', (this.turn + 1).toString());
    }
  }

  ngOnInit() {
  }

}
