import { createReducer, on } from '@ngrx/store';
import { timeSeriesForStateLoaded } from './gae.actions';

export const initialState: { source: Array<Array<Date | number>>; dimensions: string[] } = {
  source: [[new Date(0), 0]],
  dimensions: ['timestamp', 'value'],
};

export const timeseriesReducer = createReducer(
  (null as unknown) as { source: Array<Array<Date | number>>; dimensions: string[] },
  on(timeSeriesForStateLoaded, (state, { timeseries }) => {
    return timeseries;
  })
);
