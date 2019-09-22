import { TestBed } from '@angular/core/testing';

import { SortHandService } from './sort-hand.service';

describe('SortHandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortHandService = TestBed.get(SortHandService);
    expect(service).toBeTruthy();
  });
});
