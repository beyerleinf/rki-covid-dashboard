import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { RKIGeneral, RKIStates, State, States } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class RkiService {
  constructor(private http: HttpClient) {}

  getGeneral(): Observable<RKIGeneral> {
    // https://rki-covid-api.now.sh/api/general
    // https://rki.marlon-lueckert.de/general
    // return this.http.get<RKIGeneral>('https://rki-covid-api.now.sh/api/general').pipe(
    return this.http.get<RKIGeneral & { lastUpdate: string }>('https://rki.marlon-lueckert.de/general').pipe(
      map(response => {
        return {
          ...response,
          lastUpdate: dayjs(response.lastUpdate.slice(0, -4), 'DD.MM.YYYY HH:mm').toDate(),
        };
      })
    );
  }

  getStateData(state: States): Observable<(State & { lastUpdate: Date }) | undefined> {
    return this.http.get<RKIStates>('https://rki-covid-api.now.sh/api/states').pipe(
      map(states => {
        const s = states.states.find(s => s.code === state);

        if (s) {
          return { ...s, lastUpdate: new Date(states.lastUpdate) };
        }

        return undefined;
      })
    );
  }
}
