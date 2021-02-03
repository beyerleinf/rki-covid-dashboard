import { createAction, props } from '@ngrx/store';
import { RKIGeneral, State } from 'src/app/shared/models';
import { RKI_LOAD_GENERAL_DATA_SUCCESS, RKI_LOAD_STATE_DATA_SUCCESS } from './ngrx-constants';

export const rkiGeneralDataLoaded = createAction(
  RKI_LOAD_GENERAL_DATA_SUCCESS,
  props<{ rkiGeneralData: RKIGeneral }>()
);

export const rkiStateDataLoaded = createAction(RKI_LOAD_STATE_DATA_SUCCESS, props<{ rkiStateData: State }>());
