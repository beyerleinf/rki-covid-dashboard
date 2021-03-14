export interface RkiVaccinationInfo<T> {
  vaccinated: number;
  vaccination: T;
  delta: number;
  quote: number;
}
