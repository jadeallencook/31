import { TestBed } from '@angular/core/testing';

import { SmallestCardService } from './smallest-card.service';

describe('SmallestCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmallestCardService = TestBed.get(SmallestCardService);
    expect(service).toBeTruthy();
  });
});
