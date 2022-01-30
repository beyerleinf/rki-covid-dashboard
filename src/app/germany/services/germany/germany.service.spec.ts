import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RKI_API_URL } from 'src/app/rki-api-url.token';
import {
  RkiGermanyCaseHistoryRaw,
  RkiGermanyDeathHistoryRaw,
  RkiGermanyRaw,
  RkiGermanyRecoveredHistoryRaw,
} from '../../models';
import { GermanyService } from './germany.service';

describe('GermanyService', () => {
  let service: GermanyService;

  let http: HttpTestingController;

  const baseUrl = 'https://some.server';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: RKI_API_URL, useValue: baseUrl }],
    });

    service = TestBed.inject(GermanyService);
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

  describe('get', () => {
    const url = `${baseUrl}/germany`;
    const response: RkiGermanyRaw = {
      cases: 100,
      deaths: 102,
      recovered: 103,
      weekIncidence: 12,
      casesPer100k: 10,
      casesPerWeek: 11,
      delta: {
        cases: 1,
        deaths: 2,
        recovered: 3,
      },
      r: {
        date: new Date(0).toISOString(),
        value: 12,
        rValue4Days: {
          date: new Date(1).toISOString(),
          value: 13,
        },
        rValue7Days: {
          date: new Date(2).toISOString(),
          value: 14,
        },
      },
      meta: {
        contact: 'Contact',
        info: 'info',
        lastCheckedForUpdate: new Date(3).toISOString(),
        lastUpdate: new Date(4).toISOString(),
        source: 'Source',
      },
    };

    it('should call correct api endpoint', done => {
      service.get().subscribe(() => {
        expect().nothing();
        done();
      });

      const req = http.expectOne(url);
      req.flush(response);
    });

    it('should use correct http method', done => {
      service.get().subscribe(() => {
        expect().nothing();
        done();
      });

      const req = http.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(response);
    });

    it('should return correct response', done => {
      service.get().subscribe(res => {
        expect(res).toEqual({
          cases: 100,
          deaths: 102,
          recovered: 103,
          weekIncidence: 12,
          casesPer100k: 10,
          casesPerWeek: 11,
          delta: {
            cases: 1,
            deaths: 2,
            recovered: 3,
          },
          r: {
            date: new Date(0),
            value: 12,
            rValue4Days: {
              date: new Date(1),
              value: 13,
            },
            rValue7Days: {
              date: new Date(2),
              value: 14,
            },
          },
          meta: {
            contact: 'Contact',
            info: 'info',
            lastCheckedForUpdate: new Date(3),
            lastUpdate: new Date(4),
            source: 'Source',
          },
        });
        done();
      });

      const req = http.expectOne(url);
      req.flush(response);
    });

    it('should return correct error response', done => {
      service.get().subscribe(
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

  describe('getCaseHistory', () => {
    const url = `${baseUrl}/germany/history/cases`;
    const response: RkiGermanyCaseHistoryRaw = {
      data: [
        { date: new Date(0).toISOString(), cases: 100 },
        { date: new Date(1).toISOString(), cases: 200 },
        { date: new Date(2).toISOString(), cases: 300 },
      ],
      meta: {
        contact: 'Contact',
        info: 'info',
        lastCheckedForUpdate: new Date(3).toISOString(),
        lastUpdate: new Date(4).toISOString(),
        source: 'Source',
      },
    };

    it('should call correct api endpoint', done => {
      service.getCaseHistory().subscribe(() => {
        expect().nothing();
        done();
      });

      const req = http.expectOne(url);
      req.flush(response);
    });

    it('should use correct http method', done => {
      service.getCaseHistory().subscribe(() => {
        expect().nothing();
        done();
      });

      const req = http.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(response);
    });

    it('should return correct response', done => {
      service.getCaseHistory().subscribe(res => {
        expect(res).toEqual({
          data: [
            { date: new Date(0), cases: 100 },
            { date: new Date(1), cases: 200 },
            { date: new Date(2), cases: 300 },
          ],
          meta: {
            contact: 'Contact',
            info: 'info',
            lastCheckedForUpdate: new Date(3),
            lastUpdate: new Date(4),
            source: 'Source',
          },
        });
        done();
      });

      const req = http.expectOne(url);
      req.flush(response);
    });

    it('should return correct error response', done => {
      service.getCaseHistory().subscribe(
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

  describe('getDeathHistory', () => {
    const url = `${baseUrl}/germany/history/deaths`;
    const response: RkiGermanyDeathHistoryRaw = {
      data: [
        { date: new Date(0).toISOString(), deaths: 100 },
        { date: new Date(1).toISOString(), deaths: 200 },
        { date: new Date(2).toISOString(), deaths: 300 },
      ],
      meta: {
        contact: 'Contact',
        info: 'info',
        lastCheckedForUpdate: new Date(3).toISOString(),
        lastUpdate: new Date(4).toISOString(),
        source: 'Source',
      },
    };

    it('should call correct api endpoint', done => {
      service.getDeathHistory().subscribe(() => {
        expect().nothing();
        done();
      });

      const req = http.expectOne(url);
      req.flush(response);
    });

    it('should use correct http method', done => {
      service.getDeathHistory().subscribe(() => {
        expect().nothing();
        done();
      });

      const req = http.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(response);
    });

    it('should return correct response', done => {
      service.getDeathHistory().subscribe(res => {
        expect(res).toEqual({
          data: [
            { date: new Date(0), deaths: 100 },
            { date: new Date(1), deaths: 200 },
            { date: new Date(2), deaths: 300 },
          ],
          meta: {
            contact: 'Contact',
            info: 'info',
            lastCheckedForUpdate: new Date(3),
            lastUpdate: new Date(4),
            source: 'Source',
          },
        });
        done();
      });

      const req = http.expectOne(url);
      req.flush(response);
    });

    it('should return correct error response', done => {
      service.getDeathHistory().subscribe(
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

  describe('getRecoveredHistory', () => {
    const url = `${baseUrl}/germany/history/recovered`;
    const response: RkiGermanyRecoveredHistoryRaw = {
      data: [
        { date: new Date(0).toISOString(), recovered: 100 },
        { date: new Date(1).toISOString(), recovered: 200 },
        { date: new Date(2).toISOString(), recovered: 300 },
      ],
      meta: {
        contact: 'Contact',
        info: 'info',
        lastCheckedForUpdate: new Date(3).toISOString(),
        lastUpdate: new Date(4).toISOString(),
        source: 'Source',
      },
    };

    it('should call correct api endpoint', done => {
      service.getRecoveredHistory().subscribe(() => {
        expect().nothing();
        done();
      });

      const req = http.expectOne(url);
      req.flush(response);
    });

    it('should use correct http method', done => {
      service.getRecoveredHistory().subscribe(() => {
        expect().nothing();
        done();
      });

      const req = http.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(response);
    });

    it('should return correct response', done => {
      service.getRecoveredHistory().subscribe(res => {
        expect(res).toEqual({
          data: [
            { date: new Date(0), recovered: 100 },
            { date: new Date(1), recovered: 200 },
            { date: new Date(2), recovered: 300 },
          ],
          meta: {
            contact: 'Contact',
            info: 'info',
            lastCheckedForUpdate: new Date(3),
            lastUpdate: new Date(4),
            source: 'Source',
          },
        });
        done();
      });

      const req = http.expectOne(url);
      req.flush(response);
    });

    it('should return correct error response', done => {
      service.getRecoveredHistory().subscribe(
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
