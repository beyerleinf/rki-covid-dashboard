import { TestBed } from '@angular/core/testing';

import { GermanyService } from './germany.service';

describe('GermanyService', () => {
  let service: GermanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GermanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
