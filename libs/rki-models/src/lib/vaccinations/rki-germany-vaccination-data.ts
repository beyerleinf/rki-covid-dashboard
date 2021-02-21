import { RkiVaccinationDataBase } from './rki-vaccination-data-base';
import { RkiVaccinationStates } from './rki-vaccination-data-states';

export interface RkiGermanyVaccinationData extends RkiVaccinationDataBase {
  states: RkiVaccinationStates;
}
