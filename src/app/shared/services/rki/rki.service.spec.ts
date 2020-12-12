import { TestBed } from '@angular/core/testing';

import { RkiService } from './rki.service';

describe('RkiService', () => {
  let service: RkiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RkiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
