import { TestBed } from '@angular/core/testing';

import { LargestCardService } from './largest-card.service';

describe('LargestCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LargestCardService = TestBed.get(LargestCardService);
    expect(service).toBeTruthy();
  });
});
