import { RkiSecondVaccination } from './rki-second-vaccination';
import { RkiVaccinationIndication } from './rki-vaccination-indication';
import { RkiVaccinationManufacturers } from './rki-vacination-manufacturers';

export interface RkiVaccinationDataBase {
  administeredVaccinations: number;
  vaccinated: number;
  vaccination: RkiVaccinationManufacturers;
  delta: number;
  quote: number;
  secondVaccination: RkiSecondVaccination;
  indication: RkiVaccinationIndication;
}
