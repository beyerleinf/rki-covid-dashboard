import { createReducer, on } from '@ngrx/store';
import { RKIGeneral, State } from '../shared/models';
import { rkiGeneralDataLoaded, rkiStateDataLoaded } from './rki.actions';

export const initialStateGeneral: RKIGeneral = {
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
  initialStateGeneral,
  on(rkiGeneralDataLoaded, (state, { rkiGeneralData }) => rkiGeneralData)
);

export const initialStateState: State = {
  deaths: 0,
  weekIncidence: 0,
  casesPer100k: 0,
  code: '',
  count: 0,
  name: '',
};

export const rkiStateDataReducer = createReducer(
  initialStateState,
  on(rkiStateDataLoaded, (state, { rkiStateData }) => rkiStateData)
);
