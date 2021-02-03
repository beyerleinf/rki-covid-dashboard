import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { States } from '../shared/models';
import { CovidGaeService } from '../shared/services';
import {
  GAE_LOAD_TIMESERIES_FOR_STATE,
  GAE_LOAD_TIMESERIES_FOR_STATE_ERROR,
  GAE_LOAD_TIMESERIES_FOR_STATE_SUCCESS,
} from './ngrx-constants';

@Injectable()
export class GaeEffects {
  loadTimeseries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GAE_LOAD_TIMESERIES_FOR_STATE),
      mergeMap(action => {
        return this.gae.timeseries((action as any).state).pipe(
          map(timeseries => {
            const source = [];

            for (const entry of timeseries.data) {
              const key = Object.keys(entry)[0];
              source.push([new Date(key), entry[key]]);
            }

            return {
              type: GAE_LOAD_TIMESERIES_FOR_STATE_SUCCESS,
              timeseries: { source, dimensions: ['timestamp', 'value'] },
            };
          }),
          catchError(() => of({ type: GAE_LOAD_TIMESERIES_FOR_STATE_ERROR }))
        );
      })
    )
  );

  constructor(private actions$: Actions, private gae: CovidGaeService) {}
}
