import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectTimeseries = createSelector(
  (state: AppState) => state.timeseries,
  timeseries => {
    return timeseries;
  }
);
