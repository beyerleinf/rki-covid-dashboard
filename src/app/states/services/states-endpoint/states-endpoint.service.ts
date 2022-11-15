import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RkiCaseHistoryItem, RkiMeta } from 'src/app/core/models';
import { RKI_API_URL } from 'src/app/rki-api-url.token';
import { parseMeta } from 'src/app/core/helpers';
import { RkiStateCaseHistoryRaw, RkiStateRaw, RkiStatesData } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class StatesEndpointService {
  constructor(private http: HttpClient, @Inject(RKI_API_URL) private apiUrl: string) {}

  get<T extends keyof RkiStatesData>(state: T) {
    return this.http.get<RkiStateRaw<typeof state>>(`${this.apiUrl}/states/${state}`).pipe(
      map(response => ({
        ...response,
        meta: parseMeta(response.meta),
      }))
    );
  }

  getCaseHistory<T extends keyof RkiStatesData>(state: T): Observable<{ data: RkiCaseHistoryItem[]; meta: RkiMeta }> {
    return this.http.get<RkiStateCaseHistoryRaw<typeof state>>(`${this.apiUrl}/states/${state}/history/cases`).pipe(
      map(response => ({
        data: response.data[state].map(e => ({ cases: e.cases, date: new Date(e.date) })),
        meta: parseMeta(response.meta),
      }))
    );
  }
}
