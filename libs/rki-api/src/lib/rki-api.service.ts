import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { RkiGermany } from '@rkicovid/rki-models';
import { RKI_API_URL } from './rki-api-url.token';

@Injectable({
  providedIn: 'root',
})
export class RkiApiService {
  constructor(private http: HttpClient, @Inject(RKI_API_URL) private apiUrl: string) {}

  germany() {
    return this.http.get<RkiGermany>(`${this.apiUrl}/germany`);
  }
}
