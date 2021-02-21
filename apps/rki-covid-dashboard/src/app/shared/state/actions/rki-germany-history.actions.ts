import { createAction, props } from '@ngrx/store';
import { RkiGermanyCaseHistory, RkiGermanyDeathHistory, RkiGermanyRecoveredHistory } from '@rkicovid/rki-models';
import {
  RKI_GERMANY_CASE_HISTORY_LOADED,
  RKI_GERMANY_CASE_HISTORY_MEAN_LOADED,
  RKI_GERMANY_DEATH_HISTORY_LOADED,
  RKI_GERMANY_RECOVERED_HISTORY_LOADED,
} from '../ngrx-constants';

export const rkiGermanyCaseHistoryLoaded = createAction(
  RKI_GERMANY_CASE_HISTORY_LOADED,
  props<{ germanyCaseHistory: RkiGermanyCaseHistory }>()
);

export const rkiGermanyCaseHistoryMeanLoaded = createAction(
  RKI_GERMANY_CASE_HISTORY_MEAN_LOADED,
  props<{ germanyCaseHistoryMean: Array<{ date: Date; cases: number; last: boolean }> }>()
);

export const rkiGermanyDeathHistoryLoaded = createAction(
  RKI_GERMANY_DEATH_HISTORY_LOADED,
  props<{ germanyDeathHistory: RkiGermanyDeathHistory }>()
);

export const rkiGermanyRecoveredHistoryLoaded = createAction(
  RKI_GERMANY_RECOVERED_HISTORY_LOADED,
  props<{ germanyRecoveredHistory: RkiGermanyRecoveredHistory }>()
);
