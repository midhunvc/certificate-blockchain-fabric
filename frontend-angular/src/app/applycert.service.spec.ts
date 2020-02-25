import { TestBed } from '@angular/core/testing';

import { ApplycertService } from './applycert.service';

describe('ApplycertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplycertService = TestBed.get(ApplycertService);
    expect(service).toBeTruthy();
  });
});
