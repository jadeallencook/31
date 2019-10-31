import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {
  @Input() instructions: string;

  constructor() { }

  ngOnInit() {
  }

}
