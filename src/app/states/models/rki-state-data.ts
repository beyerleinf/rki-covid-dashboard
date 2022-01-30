import { RkiDelta } from 'src/app/core/models';
import { State } from './state';

export interface RkiStateData {
  id: number;
  name: string;
  population: number;
  cases: number;
  deaths: number;
  casesPerWeek: number;
  deathsPerWeek: number;
  recovered: number;
  abbreviation: State;
  weekIncidence: number;
  casesPer100k: number;
  delta: RkiDelta;
}
