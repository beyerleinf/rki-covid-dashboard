import { RkiVaccinationInfo } from './rki-vaccination-info';
import { RkiVaccinationManufacturers } from './rki-vaccination-manufacturers';

export interface RkiVaccinationDataBase extends RkiVaccinationInfo<RkiVaccinationManufacturers> {
  administeredVaccinations: number;
  secondVaccination: RkiVaccinationInfo<Omit<RkiVaccinationManufacturers, 'janssen'>>;
  boosterVaccination: Omit<RkiVaccinationInfo<Omit<RkiVaccinationManufacturers, 'astraZeneca'>>, 'quote'>;
}
