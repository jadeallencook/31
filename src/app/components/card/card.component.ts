import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card.model';
import { Suit } from '../../types/suit.type';
import { Face } from '../../types/face.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  suit: Suit;
  face: Face;

  color() {
    if (this.suit === 'D' || this.suit === 'H') {
      return 'red';
    } else if (this.suit === 'C' || this.suit === 'S') {
      return 'black';
    } else {
      return 'flipped';
    }
  }

  constructor() { }

  ngOnInit() {
    if (this.card) {
      this.suit = this.card.suit;
      this.face = this.card.face;
    }
  }

}
