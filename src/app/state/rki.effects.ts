import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { RkiService } from '../shared/services';
import {
  RKI_LOAD_GENERAL_DATA,
  RKI_LOAD_GENERAL_DATA_ERROR,
  RKI_LOAD_GENERAL_DATA_SUCCESS,
  RKI_LOAD_STATE_DATA,
  RKI_LOAD_STATE_DATA_ERROR,
  RKI_LOAD_STATE_DATA_SUCCESS,
} from './ngrx-constants';

@Injectable()
export class RkiEffects {
  loadRkiData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RKI_LOAD_GENERAL_DATA),
      mergeMap(() => {
        return this.rki.getGeneral().pipe(
          map(general => ({ type: RKI_LOAD_GENERAL_DATA_SUCCESS, rkiGeneralData: general })),
          catchError(() => of({ type: RKI_LOAD_GENERAL_DATA_ERROR }))
        );
      })
    )
  );

  loadRkiStateData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RKI_LOAD_STATE_DATA),
      mergeMap(action => {
        return this.rki.getStateData((action as any).state).pipe(
          map(rkiStateData => ({ type: RKI_LOAD_STATE_DATA_SUCCESS, rkiStateData })),
          catchError(() => of({ type: RKI_LOAD_STATE_DATA_ERROR }))
        );
      })
    )
  );

  constructor(private actions$: Actions, private rki: RkiService) {}
}
