import { createReducer, on } from '@ngrx/store';
import { RkiStateVaccinationData, RkiVaccinations } from '@rkicovid/rki-models';
import { rkiVaccinationsLoaded } from '../actions';

const stateInitial: RkiStateVaccinationData = {
  administeredVaccinations: 0,
  delta: 0,
  indication: {
    age: 0,
    job: 0,
    medical: 0,
    nursingHome: 0,
    secondVaccination: {
      age: 0,
      job: 0,
      medical: 0,
      nursingHome: 0,
    },
  },
  name: '',
  quote: 0,
  vaccinated: 0,
  secondVaccination: {
    delta: 0,
    quote: 0,
    vaccinated: 0,
    vaccination: {
      biontech: 0,
      moderna: 0,
    },
  },
  vaccination: {
    astraZeneca: 0,
    biontech: 0,
    moderna: 0,
  },
};

const initial: RkiVaccinations = {
  data: {
    administeredVaccinations: 0,
    delta: 0,
    indication: {
      age: 0,
      job: 0,
      medical: 0,
      nursingHome: 0,
      secondVaccination: {
        age: 0,
        job: 0,
        medical: 0,
        nursingHome: 0,
      },
    },
    quote: 0,
    secondVaccination: {
      delta: 0,
      quote: 0,
      vaccinated: 0,
      vaccination: {
        biontech: 0,
        moderna: 0,
      },
    },
    states: {
      BB: stateInitial,
      BE: stateInitial,
      BW: stateInitial,
      BY: stateInitial,
      HB: stateInitial,
      HE: stateInitial,
      HH: stateInitial,
      MV: stateInitial,
      NI: stateInitial,
      NW: stateInitial,
      RP: stateInitial,
      SL: stateInitial,
      SN: stateInitial,
      ST: stateInitial,
      TH: stateInitial,
    },
    vaccinated: 0,
    vaccination: {
      astraZeneca: 0,
      biontech: 0,
      moderna: 0,
    },
  },
  meta: {
    contact: '',
    info: '',
    lastCheckedForUpdate: new Date(0),
    lastUpdate: new Date(0),
    source: '',
  },
};

export const rkiVaccinationsReducer = createReducer(
  { vaccinations: initial, isLoading: true },
  on(rkiVaccinationsLoaded, (state, { vaccinations }) => ({ vaccinations, isLoading: false }))
);
