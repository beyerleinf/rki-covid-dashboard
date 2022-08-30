import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { parseMeta, parseRValue } from 'src/app/core/helpers';
import { RKI_API_URL } from 'src/app/rki-api-url.token';
import {
  RkiGermany,
  RkiGermanyCaseHistory,
  RkiGermanyCaseHistoryRaw,
  RkiGermanyDeathHistory,
  RkiGermanyDeathHistoryRaw,
  RkiGermanyRaw,
  RkiGermanyRecoveredHistory,
  RkiGermanyRecoveredHistoryRaw,
} from '../../models';

@Injectable({
  providedIn: 'root',
})
export class GermanyEndpointService {
  constructor(private http: HttpClient, @Inject(RKI_API_URL) private apiUrl: string) {}

  get(): Observable<RkiGermany> {
    return this.http.get<RkiGermanyRaw>(`${this.apiUrl}/germany`).pipe(
      map(response => ({
        ...response,
        meta: parseMeta(response.meta),
        r: {
          value: response.r.value,
          date: new Date(response.r.date),
          rValue4Days: parseRValue(response.r.rValue4Days),
          rValue7Days: parseRValue(response.r.rValue7Days),
        },
      }))
    );
  }

  getCaseHistory(): Observable<RkiGermanyCaseHistory> {
    return this.http.get<RkiGermanyCaseHistoryRaw>(`${this.apiUrl}/germany/history/cases`).pipe(
      map(response => ({
        data: response.data.map(e => ({ cases: e.cases, date: new Date(e.date) })),
        meta: parseMeta(response.meta),
      }))
    );
  }

  getDeathHistory(): Observable<RkiGermanyDeathHistory> {
    return this.http.get<RkiGermanyDeathHistoryRaw>(`${this.apiUrl}/germany/history/deaths`).pipe(
      map(response => ({
        data: response.data.map(e => ({ deaths: e.deaths, date: new Date(e.date) })),
        meta: parseMeta(response.meta),
      }))
    );
  }

  getRecoveredHistory(): Observable<RkiGermanyRecoveredHistory> {
    return this.http.get<RkiGermanyRecoveredHistoryRaw>(`${this.apiUrl}/germany/history/recovered`).pipe(
      map(response => ({
        data: response.data.map(e => ({ recovered: e.recovered, date: new Date(e.date) })),
        meta: parseMeta(response.meta),
      }))
    );
  }
}
