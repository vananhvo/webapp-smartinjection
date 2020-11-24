import { TestBed } from '@angular/core/testing';

import { WelloperatorService } from './welloperator.service';

describe('WelloperatorService', () => {
  let service: WelloperatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelloperatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
