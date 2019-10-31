import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() points: number = 0;
  @Input() knock;
  @Input() draw;

  constructor() { }

  ngOnInit() {
  }

}
