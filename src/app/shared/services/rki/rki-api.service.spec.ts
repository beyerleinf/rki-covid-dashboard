import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RKI_API_URL } from 'src/app/rki-api-url.token';
import { RkiGermanyRaw, RkiMeta, RkiMetaRaw } from '../../models';
import { RkiApiService } from './rki-api.service';

describe('RkiApiService', () => {
  let service: RkiApiService;
  let http: HttpTestingController;

  const baseUrl = 'https://some.server';

  const metaRaw: RkiMetaRaw = {
    contact: 'a',
    info: 'b',
    lastCheckedForUpdate: new Date(0).toISOString(),
    lastUpdate: new Date(1).toISOString(),
    source: 'e',
  };

  const metaParsed: RkiMeta = {
    contact: 'a',
    info: 'b',
    lastCheckedForUpdate: new Date(0),
    lastUpdate: new Date(1),
    source: 'e',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: RKI_API_URL, useValue: baseUrl }],
    });

    service = TestBed.inject(RkiApiService);
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

  describe('germany', () => {
    const url = `${baseUrl}/germany`;
    const respose: RkiGermanyRaw = {
      cases: 1,
      casesPer100k: 2,
      casesPerWeek: 3,
      deaths: 4,
      delta: {
        cases: 1,
        deaths: 2,
        recovered: 3,
      },
      recovered: 5,
      weekIncidence: 6,
      r: {
        date: new Date(2).toISOString(),
        value: 1,
      },
      meta: metaRaw,
    };

    it('should call correct api endpoint', done => {
      service.germany().subscribe(() => {
        expect(true).toBeTruthy();
        done();
      });

      const req = http.expectOne(url);
      req.flush(respose);
    });

    it('should use correct http method', done => {
      service.germany().subscribe(() => {
        expect(true).toBeTruthy();
        done();
      });

      const req = http.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(respose);
    });

    it('should return correct respose', done => {
      service.germany().subscribe(res => {
        expect(res).toEqual({
          cases: 1,
          casesPer100k: 2,
          casesPerWeek: 3,
          deaths: 4,
          delta: {
            cases: 1,
            deaths: 2,
            recovered: 3,
          },
          recovered: 5,
          weekIncidence: 6,
          r: {
            date: new Date(2),
            value: 1,
          },
          meta: metaParsed,
        });
        done();
      });

      const req = http.expectOne(url);
      req.flush(respose);
    });

    it('should return correct error respose', done => {
      service.germany().subscribe(
        () => {
          fail();
        },
        err => {
          expect(err).toBeInstanceOf(HttpErrorResponse);
          done();
        }
      );

      const req = http.expectOne(url);
      req.error(new ErrorEvent('abc'), { status: 500 });
    });
  });
});
