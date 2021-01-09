import { RkiMeta } from './rki-meta';
import { RkiState } from './rki-state';

export interface RkiVaccinations {
  data: RkiVaccinationData;
  meta: RkiMeta;
}

export interface RkiStateVaccinations {
  [key: string]: RkiStateVaccinationData;
  // BW: RkiStateVaccinationData;
  // BY: RkiStateVaccinationData;
  // BB: RkiStateVaccinationData;
  // BE: RkiStateVaccinationData;
  // HB: RkiStateVaccinationData;
  // HH: RkiStateVaccinationData;
  // HE: RkiStateVaccinationData;
  // MV: RkiStateVaccinationData;
  // NI: RkiStateVaccinationData;
  // NW: RkiStateVaccinationData;
  // RP: RkiStateVaccinationData;
  // SL: RkiStateVaccinationData;
  // ST: RkiStateVaccinationData;
  // SN: RkiStateVaccinationData;
  // SH: RkiStateVaccinationData;
  // TH: RkiStateVaccinationData;
}

export interface RkiVaccinationData extends RkiVaccinationDataBase {
  states: {
    [key: string]: RkiStateVaccinationData;
  };
}

export interface RkiStateVaccinationData extends RkiVaccinationDataBase {
  name: string;
}

export interface RkiVaccinationIndication {
  age: number;
  job: number;
  medical: number;
  nursingHome: number;
}

export interface RkiVaccinationDataBase {
  vaccinated: number;
  delta: number;
  vaccinatedPer1k: number;
  quote: number;
  indication: RkiVaccinationIndication;
}
