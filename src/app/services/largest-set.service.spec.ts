import { TestBed } from '@angular/core/testing';

import { LargestSetService } from './largest-set.service';

describe('LargestSetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LargestSetService = TestBed.get(LargestSetService);
    expect(service).toBeTruthy();
  });
});
