import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RKI_API_URL } from 'src/app/rki-api-url.token';
import { RkiDistrictsRaw } from '../../models';
import { DistrictsService } from './districts.service';

describe('DistrictsService', () => {
  let service: DistrictsService;

  let http: HttpTestingController;

  const baseUrl = 'https://some.server';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: RKI_API_URL, useValue: baseUrl }],
    });

    service = TestBed.inject(DistrictsService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  describe('general', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('getAgsMap', () => {
    const url = 'assets/ags-map.json';
    const response = [{ ags: 'abc', county: 'def' }];

    it('should call correct api endpoint', done => {
      service.getAgsMap().subscribe(() => {
        expect().nothing();
        done();
      });

      const req = http.expectOne(url);
      req.flush(response);
    });

    it('should use correct http method', done => {
      service.getAgsMap().subscribe(() => {
        expect().nothing();
        done();
      });

      const req = http.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(response);
    });

    it('should return correct response', done => {
      service.getAgsMap().subscribe(res => {
        expect(res).toEqual(response);
        done();
      });

      const req = http.expectOne(url);
      req.flush(response);
    });

    it('should return correct error response', done => {
      service.getAgsMap().subscribe(
        () => {
          fail();
        },
        err => {
          expect(err instanceof HttpErrorResponse).toBeTrue();
          done();
        }
      );

      const req = http.expectOne(url);
      req.error(new ErrorEvent('abc'), { status: 500 });
    });
  });

  describe('get', () => {
    const ags = 'SomeAgs';
    const url = `${baseUrl}/districts/${ags}`;
    const response: RkiDistrictsRaw = {
      meta: {
        contact: 'Contact',
        info: 'info',
        lastCheckedForUpdate: new Date(0).toISOString(),
        lastUpdate: new Date(1).toISOString(),
        source: 'Source',
      },
      data: {
        [ags]: {
          ags,
          cases: 0,
          casesPer100k: 0,
          casesPerWeek: 0,
          county: 'County',
          deaths: 0,
          deathsPerWeek: 0,
          delta: { cases: 0, deaths: 0, recovered: 0 },
          name: 'Something',
          population: 0,
          recovered: 0,
          weekIncidence: 0,
        },
      },
    };

    it('should call correct api endpoint', done => {
      service.get(ags).subscribe(() => {
        expect().nothing();
        done();
      });

      const req = http.expectOne(url);
      req.flush(response);
    });

    it('should use correct http method', done => {
      service.get(ags).subscribe(() => {
        expect().nothing();
        done();
      });

      const req = http.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(response);
    });

    it('should return correct response', done => {
      service.get(ags).subscribe(res => {
        expect(res).toEqual({
          meta: {
            contact: 'Contact',
            info: 'info',
            lastCheckedForUpdate: new Date(0),
            lastUpdate: new Date(1),
            source: 'Source',
          },
          data: {
            [ags]: {
              ags,
              cases: 0,
              casesPer100k: 0,
              casesPerWeek: 0,
              county: 'County',
              deaths: 0,
              deathsPerWeek: 0,
              delta: { cases: 0, deaths: 0, recovered: 0 },
              name: 'Something',
              population: 0,
              recovered: 0,
              weekIncidence: 0,
            },
          },
        });
        done();
      });

      const req = http.expectOne(url);
      req.flush(response);
    });

    it('should return correct error response', done => {
      service.get(ags).subscribe(
        () => {
          fail();
        },
        err => {
          expect(err instanceof HttpErrorResponse).toBeTrue();
          done();
        }
      );

      const req = http.expectOne(url);
      req.error(new ErrorEvent('abc'), { status: 500 });
    });
  });
});
