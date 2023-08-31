import { TestBed } from '@angular/core/testing';

import { SendOrderService } from './send-order.service';

describe('SendOrderService', () => {
  let service: SendOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
