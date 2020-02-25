import { TestBed } from '@angular/core/testing';

import { CmpnyserviceService } from './cmpnyservice.service';

describe('CmpnyserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CmpnyserviceService = TestBed.get(CmpnyserviceService);
    expect(service).toBeTruthy();
  });
});
