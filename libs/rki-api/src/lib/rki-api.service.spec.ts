import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RKI_API_URL } from './rki-api-url.token';
import { RkiApiService } from './rki-api.service';
import { RkiGermany } from '@rkicovid/rki-models';
import { getPlatform } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

describe('RkiApiService', () => {
  let service: RkiApiService;
  let http: HttpTestingController;

  const baseUrl = 'https://some.server';

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
    const respose: RkiGermany = {
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
        date: 'someDate',
        value: 1,
      },
      meta: {
        contact: 'a',
        info: 'b',
        lastCheckedForUpdate: 'c',
        lastUpdate: 'd',
        source: 'e',
      },
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
        expect(res).toEqual(respose);
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
