import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CovidGaeService } from './covid-gae.service';

describe('CovidGaeService', () => {
  let service: CovidGaeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(CovidGaeService);
  });

  describe('general', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });
});
