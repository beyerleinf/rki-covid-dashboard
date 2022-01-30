import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RKI_API_URL } from 'src/app/rki-api-url.token';
import { RkiStateCaseHistoryRaw, RkiStateRaw, RkiStatesData } from '../../models';
import { StatesService } from './states.service';

describe('StatesService', () => {
  let service: StatesService;

  let http: HttpTestingController;

  const baseUrl = 'https://some.server';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: RKI_API_URL, useValue: baseUrl }],
    });

    service = TestBed.inject(StatesService);
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
    const state: keyof RkiStatesData = 'BW';
    const url = `${baseUrl}/states/${state}`;
    const response: RkiStateRaw<typeof state> = {
      data: {
        [state]: {
          abbreviation: 'BW',
          cases: 100,
          casesPer100k: 102,
          casesPerWeek: 103,
          deaths: 104,
          deathsPerWeek: 105,
          id: 1,
          name: 'Baden-Württemberg',
          recovered: 106,
          population: 107,
          weekIncidence: 108,
          delta: {
            cases: 10,
            deaths: 11,
            recovered: 12,
          },
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
      service.get(state).subscribe(() => {
        expect().nothing();
        done();
      });

      const req = http.expectOne(url);
      req.flush(response);
    });

    it('should use correct http method', done => {
      service.get(state).subscribe(() => {
        expect().nothing();
        done();
      });

      const req = http.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(response);
    });

    it('should return correct response', done => {
      service.get(state).subscribe(res => {
        expect(res).toEqual({
          data: {
            [state]: {
              abbreviation: 'BW',
              cases: 100,
              casesPer100k: 102,
              casesPerWeek: 103,
              deaths: 104,
              deathsPerWeek: 105,
              id: 1,
              name: 'Baden-Württemberg',
              recovered: 106,
              population: 107,
              weekIncidence: 108,
              delta: {
                cases: 10,
                deaths: 11,
                recovered: 12,
              },
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
      service.get(state).subscribe(
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
    const state: keyof RkiStatesData = 'BW';
    const url = `${baseUrl}/states/${state}/history/cases`;
    const response: RkiStateCaseHistoryRaw<typeof state> = {
      data: {
        [state]: [
          { date: new Date(0).toISOString(), cases: 100 },
          { date: new Date(1).toISOString(), cases: 200 },
          { date: new Date(2).toISOString(), cases: 300 },
        ],
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
      service.getCaseHistory(state).subscribe(() => {
        expect().nothing();
        done();
      });

      const req = http.expectOne(url);
      req.flush(response);
    });

    it('should use correct http method', done => {
      service.getCaseHistory(state).subscribe(() => {
        expect().nothing();
        done();
      });

      const req = http.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(response);
    });

    it('should return correct response', done => {
      service.getCaseHistory(state).subscribe(res => {
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
      service.getCaseHistory(state).subscribe(
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
