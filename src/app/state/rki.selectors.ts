import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectRkiGeneralData = createSelector(
  (state: AppState) => state.rkiGeneralData,
  general => general
);

export const selectRkiStateData = createSelector(
  (state: AppState) => state.rkiStateData,
  stateData => stateData
);
