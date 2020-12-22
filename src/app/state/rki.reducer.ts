import { createReducer, on } from '@ngrx/store';
import { RKIGeneral } from '../shared/models';
import { rkiGeneralDataLoaded } from './rki.actions';

export const initialState: RKIGeneral = {
  cases: 0,
  deaths: 0,
  recovered: 0,
  weekIncidence: 0,
  casesPer100k: 0,
  casesPerWeek: 0,
  difference: {
    cases: 0,
    deaths: 0,
    recovered: 0,
  },
  lastUpdate: new Date(0),
};

export const rkiGeneralDataReducer = createReducer(
  initialState,
  on(rkiGeneralDataLoaded, (state, { rkiGeneralData }) => {
    return rkiGeneralData;
  })
);
