import { TestBed } from '@angular/core/testing';

import { CardValueService } from './card-value.service';

describe('CardValueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardValueService = TestBed.get(CardValueService);
    expect(service).toBeTruthy();
  });
});
