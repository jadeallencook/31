import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-discard-pile',
  templateUrl: './discard-pile.component.html',
  styleUrls: ['./discard-pile.component.scss']
})
export class DiscardPileComponent implements OnInit {
  @Input() cards: Array<Card>;

  constructor() { }

  ngOnInit() {
  }
}
