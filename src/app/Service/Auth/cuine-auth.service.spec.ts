import { TestBed } from '@angular/core/testing';

import { CuineAuthService } from './cuine-auth.service';

describe('CuineAuthService', () => {
  let service: CuineAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuineAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
