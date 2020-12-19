import { createReducer, on } from '@ngrx/store';
import { RKIGeneral } from '../shared/models';
import { getRkiGeneralData, rkiGeneralDataLoaded } from './rki.actions';

export const initialState: RKIGeneral = {
  cases: 0,
  deaths: 0,
  recovered: 0,
  weekIncidence: 0,
  difference: {
    cases: 0,
    deaths: 0,
    recovered: 0,
  },
  lastUpdate: new Date(0),
};

export const rkiGeneralDataReducer = createReducer(
  initialState,
  on(getRkiGeneralData, (state, { rkiGeneralData }) => {
    console.log('get', state, rkiGeneralData);

    return rkiGeneralData;
  }),
  on(rkiGeneralDataLoaded, (state, { rkiGeneralData }) => {
    console.log('loaded', state, rkiGeneralData);

    return rkiGeneralData;
  })
);
