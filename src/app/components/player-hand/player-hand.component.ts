import { Component, OnInit, Input } from '@angular/core';
import { Card }  from '../../models/card.model';

@Component({
  selector: 'app-player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.scss']
})
export class PlayerHandComponent implements OnInit {
  @Input() cards: Array<Card> = [];
  @Input() dispose;

  constructor() {
  }

  ngOnInit() {
  }

}
