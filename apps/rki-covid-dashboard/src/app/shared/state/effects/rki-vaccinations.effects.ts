import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RkiApiService } from '@rkicovid/rki-api';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { RKI_VACCINATIONS, RKI_VACCINATIONS_ERROR, RKI_VACCINATIONS_LOADED } from '../ngrx-constants';

@Injectable()
export class RkiVaccinationsEffects {
  loadGermany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RKI_VACCINATIONS),
      mergeMap(() =>
        this.rki.vaccinations().pipe(
          map(vaccinations => ({ type: RKI_VACCINATIONS_LOADED, vaccinations })),
          catchError(() => of({ type: RKI_VACCINATIONS_ERROR }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private rki: RkiApiService) {}
}
