import { TestBed } from '@angular/core/testing';

import { VaccinationsService } from './vaccinations.service';

describe('VaccinationsService', () => {
  let service: VaccinationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccinationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
