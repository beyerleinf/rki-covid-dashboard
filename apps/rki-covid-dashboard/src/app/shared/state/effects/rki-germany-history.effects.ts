import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RkiApiService } from '@rkicovid/rki-api';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  RKI_GERMANY_CASE_HISTORY,
  RKI_GERMANY_CASE_HISTORY_ERROR,
  RKI_GERMANY_CASE_HISTORY_LOADED,
  RKI_GERMANY_CASE_HISTORY_MEAN_LOADED,
  RKI_GERMANY_DEATH_HISTORY_ERROR,
  RKI_GERMANY_DEATH_HISTORY_LOADED,
  RKI_GERMANY_RECOVERED_HISTORY,
  RKI_GERMANY_RECOVERED_HISTORY_ERROR,
  RKI_GERMANY_RECOVERED_HISTORY_LOADED,
} from '../ngrx-constants';
import * as dayjs from 'dayjs';
import { RkiCaseHistoryItem } from '@rkicovid/rki-models';
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

  loadGermanyCaseHistoryMean$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RKI_GERMANY_CASE_HISTORY),
      mergeMap(() =>
        this.rki.germanyCaseHistory().pipe(
          map(germanyCaseHistory => {
            const germanyCaseHistoryMean: Array<RkiCaseHistoryItem & { last: boolean }> = [];
            const groupedCaseHistory = this.groupData(germanyCaseHistory.data);

            for (const key of Object.keys(groupedCaseHistory)) {
              const group = groupedCaseHistory[key];
              const mean = Math.round(group.reduce((acc, value) => (acc += value.cases), 9) / group.length);
              germanyCaseHistoryMean.push(
                ...group.map((item, idx) => ({ date: item.date, cases: mean, last: idx === group.length - 1 }))
              );
            }

            return {
              type: RKI_GERMANY_CASE_HISTORY_MEAN_LOADED,
              germanyCaseHistoryMean,
            };
          })
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

  private groupData<T extends { date: Date }>(data: T[]): { [key: string]: Array<T> } {
    return data.reduce((acc, item) => {
      const parsedDate = dayjs(item.date);
      const key = `${parsedDate.isoWeekYear()}-${parsedDate.isoWeek()}`;

      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push(item);

      return acc;
    }, {});
  }
}
