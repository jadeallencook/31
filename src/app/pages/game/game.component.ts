import { Component, OnInit } from '@angular/core';
import { Deck } from '../../models/deck.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  deck = new Deck();

  constructor() {
    this.deck.shuffle();
  }

  ngOnInit() {
  }

}
