import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RkiApiService } from '@rkicovid/rki-api';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  RKI_GERMANY_CASE_HISTORY,
  RKI_GERMANY_CASE_HISTORY_ERROR,
  RKI_GERMANY_CASE_HISTORY_LOADED,
  RKI_GERMANY_DEATH_HISTORY_ERROR,
  RKI_GERMANY_DEATH_HISTORY_LOADED,
  RKI_GERMANY_RECOVERED_HISTORY,
  RKI_GERMANY_RECOVERED_HISTORY_ERROR,
  RKI_GERMANY_RECOVERED_HISTORY_LOADED,
} from '../ngrx-constants';

@Injectable()
export class RkiGermanyHistoryEffect {
  loadGermanyCaseHistory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RKI_GERMANY_CASE_HISTORY),
      mergeMap(() =>
        this.rki.germanyCaseHistory().pipe(
          map(germanyCaseHistory => ({
            type: RKI_GERMANY_CASE_HISTORY_LOADED,
            germanyCaseHistory,
          })),
          catchError(() => of({ type: RKI_GERMANY_CASE_HISTORY_ERROR }))
        )
      )
    )
  );

  loadGermanyDeathHistory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RKI_GERMANY_CASE_HISTORY),
      mergeMap(() =>
        this.rki.germanyDeathHistory().pipe(
          map(germanyDeathHistory => ({
            type: RKI_GERMANY_DEATH_HISTORY_LOADED,
            germanyDeathHistory,
          })),
          catchError(() => of({ type: RKI_GERMANY_DEATH_HISTORY_ERROR }))
        )
      )
    )
  );

  loadGermanyRecoveredHistory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RKI_GERMANY_RECOVERED_HISTORY),
      mergeMap(() =>
        this.rki.germanyRecoveredHistory().pipe(
          map(germanyRecoveredHistory => ({
            type: RKI_GERMANY_RECOVERED_HISTORY_LOADED,
            germanyRecoveredHistory,
          })),
          catchError(() => of({ type: RKI_GERMANY_RECOVERED_HISTORY_ERROR }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private rki: RkiApiService) {}
}
