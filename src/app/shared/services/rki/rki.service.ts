import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State, States } from '../../models';
import { RkiDistrict } from '../../models/rki-district';
import { RkiGermany } from '../../models/rki-germany';
import { RkiMeta } from '../../models/rki-meta';
import { RkiState } from '../../models/rki-state';
import { StateType } from '../../models/states';

@Injectable({
  providedIn: 'root',
})
export class RkiService {
  private readonly baseUrl = 'https://api.corona-zahlen.org';

  constructor(private http: HttpClient) {}

  germany() {
    return this.http.get<RkiGermany>(`${this.baseUrl}/germany`);
  }

  states() {
    return this.http.get<{ data: States<RkiState>; meta: RkiMeta }>(`${this.baseUrl}/states`);
  }

  state<T extends keyof States<RkiState>>(abbreviation: T) {
    return this.http.get<{ data: Pick<States<RkiState>, T>; meta: RkiMeta }>(`${this.baseUrl}/states/${abbreviation}`);
  }

  districts() {
    return this.http.get<{ data: { [key: string]: RkiDistrict }; meta: RkiMeta }>(`${this.baseUrl}/districts`);
  }

  district(ags: string) {}

  // getGeneral(): Observable<RKIGeneral> {
  //   return this.http.get<RKIGeneral & { lastUpdate: string }>('https://rki.marlon-lueckert.de/api/general').pipe(
  //     map(response => {
  //       return {
  //         ...response,
  //         lastUpdate: dayjs(response.lastUpdate.slice(0, -4), 'DD.MM.YYYY HH:mm').toDate(),
  //       };
  //     })
  //   );
  // }

  // getStateData(state: States): Observable<(State & { lastUpdate: Date }) | undefined> {
  //   return this.http.get<RKIStates>('https://rki.marlon-lueckert.de/api/states').pipe(
  //     map(states => {
  //       const s = states.states.find(s => s.code === state);

  //       if (s) {
  //         return { ...s, lastUpdate: new Date(states.lastUpdate) };
  //       }

  //       return undefined;
  //     })
  //   );
  // }
}
