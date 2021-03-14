import { RkiVaccinationIndication } from './rki-vaccination-indication';
import { RkiVaccinationInfo } from './rki-vaccination-info';
import { RkiVaccinationManufacturers } from './rki-vaccination-manufacturers';

export interface RkiVaccinationDataBase extends RkiVaccinationInfo<RkiVaccinationManufacturers> {
  administeredVaccinations: number;
  secondVaccination: RkiVaccinationInfo<Pick<RkiVaccinationManufacturers, 'biontech' | 'moderna'>>;
  indication: RkiVaccinationIndication;
}
