import { createAction, props } from '@ngrx/store';
import { RKIGeneral } from 'src/app/shared/models';
import { RKI_LOAD_GENERAL_DATA_SUCCESS } from './ngrx-constants';

export const rkiGeneralDataLoaded = createAction(
  RKI_LOAD_GENERAL_DATA_SUCCESS,
  props<{ rkiGeneralData: RKIGeneral }>()
);
