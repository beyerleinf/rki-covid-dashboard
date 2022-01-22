import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RKI_API_URL } from 'src/app/rki-api-url.token';
import {
  RkiStateVaccinationData,
  RkiVaccinationHistoryRaw,
  RkiVaccinationsRaw,
  RkiVaccinationStates,
} from 'src/app/shared/models';
import { VaccinationsService } from './vaccinations.service';

describe('VaccinationsService', () => {
  let service: VaccinationsService;

  let http: HttpTestingController;

  const baseUrl = 'https://some.server';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: RKI_API_URL, useValue: baseUrl }],
    });

    service = TestBed.inject(VaccinationsService);
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
    const url = `${baseUrl}/vaccinations`;
    const response: RkiVaccinationsRaw = {
      data: {
        delta: 100,
        administeredVaccinations: 101,
        quote: 0.65,
        secondVaccination: {
          delta: 102,
          quote: 0.7,
          vaccinated: 103,
          vaccination: {
            astraZeneca: 104,
            biontech: 105,
            moderna: 106,
          },
        },
        boosterVaccination: {
          delta: 102,
          vaccinated: 103,
          vaccination: {
            biontech: 105,
            moderna: 106,
            janssen: 107,
          },
        },
        vaccinated: 107,
        vaccination: {
          astraZeneca: 108,
          biontech: 109,
          janssen: 110,
          moderna: 111,
        },
        states: {
          /* eslint-disable-next-line @typescript-eslint/naming-convention */
          BW: {
            administeredVaccinations: 1000,
          } as RkiStateVaccinationData,
        } as RkiVaccinationStates,
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
          data: {
            delta: 100,
            administeredVaccinations: 101,
            quote: 65,
            secondVaccination: {
              delta: 102,
              quote: 70,
              vaccinated: 103,
              vaccination: {
                astraZeneca: 104,
                biontech: 105,
                moderna: 106,
              },
            },
            boosterVaccination: {
              delta: 102,
              vaccinated: 103,
              vaccination: {
                biontech: 105,
                moderna: 106,
                janssen: 107,
              },
            },
            vaccinated: 107,
            vaccination: {
              astraZeneca: 108,
              biontech: 109,
              janssen: 110,
              moderna: 111,
            },
            states: {
              /* eslint-disable-next-line @typescript-eslint/naming-convention */
              BW: {
                administeredVaccinations: 1000,
              } as RkiStateVaccinationData,
            } as RkiVaccinationStates,
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

  describe('getHistory', () => {
    const url = `${baseUrl}/vaccinations/history`;
    const response: RkiVaccinationHistoryRaw = {
      data: {
        history: [
          { date: new Date(0).toISOString(), firstVaccination: 1, secondVaccination: 2, vaccinated: 3 },
          { date: new Date(1).toISOString(), firstVaccination: 10, secondVaccination: 20, vaccinated: 30 },
          { date: new Date(2).toISOString(), firstVaccination: 100, secondVaccination: 200, vaccinated: 300 },
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
      service.getHistory().subscribe(() => {
        expect().nothing();
        done();
      });

      const req = http.expectOne(url);
      req.flush(response);
    });

    it('should use correct http method', done => {
      service.getHistory().subscribe(() => {
        expect().nothing();
        done();
      });

      const req = http.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(response);
    });

    it('should return correct response', done => {
      service.getHistory().subscribe(res => {
        expect(res).toEqual({
          data: {
            history: [
              { date: new Date(0), firstVaccination: 1, secondVaccination: 2, vaccinated: 3, boosterVaccination: 4 },
              {
                date: new Date(1),
                firstVaccination: 10,
                secondVaccination: 20,
                vaccinated: 30,
                boosterVaccination: 40,
              },
              {
                date: new Date(2),
                firstVaccination: 100,
                secondVaccination: 200,
                vaccinated: 300,
                boosterVaccination: 400,
              },
            ],
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
      service.getHistory().subscribe(
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
