import { TestBed } from '@angular/core/testing';

import { CovidGaeService } from './covid-gae.service';

describe('CovidGaeService', () => {
  let service: CovidGaeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidGaeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
