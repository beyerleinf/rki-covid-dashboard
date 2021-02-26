import { RkiVaccinationIndicationData } from './rki-vaccination-indication-data';

export interface RkiVaccinationIndication extends RkiVaccinationIndicationData {
  secondVaccination: RkiVaccinationIndicationData;
}
