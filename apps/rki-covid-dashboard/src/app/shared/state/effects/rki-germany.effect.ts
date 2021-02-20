import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RkiApiService } from '@rkicovid/rki-api';
import { RKI_GERMANY, RKI_GERMANY_ERROR, RKI_GERMANY_LOADED } from '../ngrx-constants';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RkiGermanyEffect {
  loadGermany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RKI_GERMANY),
      mergeMap(() =>
        this.rki.germany().pipe(
          map(germany => ({ type: RKI_GERMANY_LOADED, germany })),
          catchError(() => of({ type: RKI_GERMANY_ERROR }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private rki: RkiApiService) {}
}
