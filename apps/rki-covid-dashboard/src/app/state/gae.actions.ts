import { createAction, props } from '@ngrx/store';
import { GAETimeseries } from '../shared/models';
import { GAE_LOAD_TIMESERIES_FOR_STATE_SUCCESS } from './ngrx-constants';

export const timeSeriesForStateLoaded = createAction(
  GAE_LOAD_TIMESERIES_FOR_STATE_SUCCESS,
  props<{ timeseries: { source: Array<Array<Date | number>>; dimensions: string[] } }>()
);
