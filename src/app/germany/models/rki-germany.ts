import { RkiDelta, RkiMeta, RkiRValue } from 'src/app/core/models';

export interface RkiGermany {
  cases: number;
  deaths: number;
  recovered: number;
  weekIncidence: number;
  casesPer100k: number;
  casesPerWeek: number;
  delta: RkiDelta;
  r: RkiRValue;
  meta: RkiMeta;
}
