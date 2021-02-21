import { createReducer, on } from '@ngrx/store';
import { RkiGermany } from '@rkicovid/rki-models';
import { rkiGermanyLoaded } from '../actions';

const initial: RkiGermany = {
  cases: 0,
  deaths: 0,
  casesPer100k: 0,
  casesPerWeek: 0,
  recovered: 0,
  weekIncidence: 0,
  r: {
    date: new Date(0),
    value: 0,
  },
  delta: {
    cases: 0,
    deaths: 0,
    recovered: 0,
  },
  meta: {
    contact: '',
    info: '',
    lastCheckedForUpdate: new Date(0),
    lastUpdate: new Date(0),
    source: '',
  },
};

export const rkiGermanyReducer = createReducer(
  { germany: initial, isLoading: true },
  on(rkiGermanyLoaded, (state, { germany }) => ({ germany, isLoading: false }))
);
