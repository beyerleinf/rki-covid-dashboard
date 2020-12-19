import { createAction, props } from '@ngrx/store';
import { RKIGeneral } from 'src/app/shared/models';
import { RKI_LOAD_GENERAL_DATA, RKI_LOAD_GENERAL_DATA_SUCCESS } from './ngrx-constants';

export const getRkiGeneralData = createAction(RKI_LOAD_GENERAL_DATA, props<{ rkiGeneralData: RKIGeneral }>());
export const rkiGeneralDataLoaded = createAction(
  RKI_LOAD_GENERAL_DATA_SUCCESS,
  props<{ rkiGeneralData: RKIGeneral }>()
);
