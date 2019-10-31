import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawPileComponent } from './draw-pile.component';

describe('DrawPileComponent', () => {
  let component: DrawPileComponent;
  let fixture: ComponentFixture<DrawPileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawPileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawPileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
