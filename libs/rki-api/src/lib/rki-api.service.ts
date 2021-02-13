import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { RkiGermany, RkiGermanyRaw } from '@rkicovid/rki-models';
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
      map(data => ({
        ...data,
        meta: {
          ...data.meta,
          lastUpdate: new Date(data.meta.lastUpdate),
          lastCheckedForUpdate: new Date(data.meta.lastCheckedForUpdate),
        },
        r: {
          ...data.r,
          date: new Date(data.r.date),
        },
      }))
    );
  }
}
