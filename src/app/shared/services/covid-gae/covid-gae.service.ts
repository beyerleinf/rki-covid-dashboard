import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GAENow, GAETimeseries, States } from '../../models/';

@Injectable({
  providedIn: 'root',
})
export class CovidGaeService {
  constructor(private http: HttpClient) {}

  now() {
    return this.http.get<GAENow>('https://covid19-germany.appspot.com/now');
  }

  timeseries(state: States) {
    return this.http.get<GAETimeseries>(`https://covid19-germany.appspot.com/timeseries/DE-${state}/cases`);
  }
}
