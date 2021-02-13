export interface RkiVaccinationIndication {
  age: number;
  job: number;
  medical: number;
  nursingHome: number;
  secondVaccination?: RkiVaccinationIndication;
}
