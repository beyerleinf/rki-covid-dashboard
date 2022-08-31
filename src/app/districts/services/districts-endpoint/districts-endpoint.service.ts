import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RKI_API_URL } from 'src/app/rki-api-url.token';
import { parseMeta } from 'src/app/core/helpers';
import { RkiDistricts, RkiDistrictsRaw } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class DistrictsEndpointService {
  constructor(private http: HttpClient, @Inject(RKI_API_URL) private apiUrl: string) {}

  getAgsMap() {
    return this.http.get<Array<{ ags: string; county: string }>>('assets/ags-map.json');
  }

  get(ags: string): Observable<RkiDistricts> {
    return this.http.get<RkiDistrictsRaw>(`${this.apiUrl}/districts/${ags}`).pipe(
      map(response => ({
        ...response,
        meta: parseMeta(response.meta),
      }))
    );
  }
}
