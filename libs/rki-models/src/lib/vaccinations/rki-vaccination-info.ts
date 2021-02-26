import { RkiVaccinationManufacturers } from './rki-vaccination-manufacturers';

export interface RkiVaccinationInfo<T> {
  vaccinated: number;
  vaccination: T;
  delta: number;
  quote: number;
}
