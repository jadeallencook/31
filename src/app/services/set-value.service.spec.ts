import { TestBed } from '@angular/core/testing';

import { SetValueService } from './set-value.service';

describe('SetValueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetValueService = TestBed.get(SetValueService);
    expect(service).toBeTruthy();
  });
});
