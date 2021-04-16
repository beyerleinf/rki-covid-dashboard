import { RkiDelta } from '../rki-delta';

export interface RkiDistrictData {
  ags: string;
  name: string;
  county: string;
  population: number;
  cases: number;
  deaths: number;
  casesPerWeek: number;
  deathsPerWeek: number;
  recovered: number;
  weekIncidence: number;
  casesPer100k: number;
  delta: RkiDelta;
}
