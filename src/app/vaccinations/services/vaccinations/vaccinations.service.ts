import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RKI_API_URL } from 'src/app/rki-api-url.token';
import { parseMeta } from 'src/app/core/helpers';
import { RkiVaccinationHistory, RkiVaccinationHistoryRaw, RkiVaccinations, RkiVaccinationsRaw } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class VaccinationsService {
  constructor(private http: HttpClient, @Inject(RKI_API_URL) private apiUrl: string) {}

  get(): Observable<RkiVaccinations> {
    return this.http.get<RkiVaccinationsRaw>(`${this.apiUrl}/vaccinations`).pipe(
      map(response => ({
        data: {
          ...response.data,
          quote: response.data.quote * 100,
          secondVaccination: {
            ...response.data.secondVaccination,
            quote: response.data.secondVaccination.quote * 100,
          },
          boosterVaccination: {
            ...response.data.boosterVaccination,
            quote: response.data.boosterVaccination.quote * 100,
          },
        },
        meta: parseMeta(response.meta),
      }))
    );
  }

  getHistory(): Observable<RkiVaccinationHistory> {
    return this.http.get<RkiVaccinationHistoryRaw>(`${this.apiUrl}/vaccinations/history`).pipe(
      map(response => ({
        data: { history: response.data.history.map(e => ({ ...e, date: new Date(e.date) })) },
        meta: parseMeta(response.meta),
      }))
    );
  }
}
