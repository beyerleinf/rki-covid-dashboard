import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  RkiGermany,
  RkiGermanyCaseHistory,
  RkiGermanyCaseHistoryRaw,
  RkiGermanyDeathHistory,
  RkiGermanyDeathHistoryRaw,
  RkiGermanyRaw,
  RkiGermanyRecoveredHistory,
  RkiGermanyRecoveredHistoryRaw,
  RkiMeta,
  RkiMetaRaw,
} from '@rkicovid/rki-models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RKI_API_URL } from './rki-api-url.token';

@Injectable({
  providedIn: 'root',
})
export class RkiApiService {
  constructor(private http: HttpClient, @Inject(RKI_API_URL) private apiUrl: string) {}

  germany(): Observable<RkiGermany> {
    return this.http.get<RkiGermanyRaw>(`${this.apiUrl}/germany`).pipe(
      map(response => ({
        ...response,
        meta: this.parseMeta(response.meta),
        r: {
          ...response.r,
          date: new Date(response.r.date),
        },
      }))
    );
  }

  germanyCaseHistory(): Observable<RkiGermanyCaseHistory> {
    return this.http.get<RkiGermanyCaseHistoryRaw>(`${this.apiUrl}/germany/history/cases`).pipe(
      map(response => ({
        data: response.data.map(e => ({ cases: e.cases, date: new Date(e.date) })),
        meta: this.parseMeta(response.meta),
      }))
    );
  }

  germanyDeathHistory(): Observable<RkiGermanyDeathHistory> {
    return this.http.get<RkiGermanyDeathHistoryRaw>(`${this.apiUrl}/germany/history/deaths`).pipe(
      map(response => ({
        data: response.data.map(e => ({ deaths: e.deaths, date: new Date(e.date) })),
        meta: this.parseMeta(response.meta),
      }))
    );
  }

  germanyRecoveredHistory(): Observable<RkiGermanyRecoveredHistory> {
    return this.http.get<RkiGermanyRecoveredHistoryRaw>(`${this.apiUrl}/germany/history/recovered`).pipe(
      map(response => ({
        data: response.data.map(e => ({ recovered: e.recovered, date: new Date(e.date) })),
        meta: this.parseMeta(response.meta),
      }))
    );
  }

  private parseMeta(meta: RkiMetaRaw): RkiMeta {
    return {
      ...meta,
      lastUpdate: new Date(meta.lastUpdate),
      lastCheckedForUpdate: new Date(meta.lastCheckedForUpdate),
    };
  }
}