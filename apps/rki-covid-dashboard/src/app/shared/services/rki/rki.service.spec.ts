import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RkiService } from './rki.service';

describe('RkiService', () => {
  let service: RkiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(RkiService);
  });

  describe('general', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });
});
