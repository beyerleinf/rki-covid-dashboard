import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RKI_API_URL } from 'src/app/rki-api-url.token';
import { GermanyService } from './germany.service';

describe('GermanyService', () => {
  let service: GermanyService;

  const baseUrl = 'https://some.server';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: RKI_API_URL, useValue: baseUrl }],
    });
    service = TestBed.inject(GermanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
