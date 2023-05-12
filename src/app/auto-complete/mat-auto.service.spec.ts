import { TestBed } from '@angular/core/testing';

import { MatAutoService } from './mat-auto.service';

describe('MatAutoService', () => {
  let service: MatAutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatAutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
