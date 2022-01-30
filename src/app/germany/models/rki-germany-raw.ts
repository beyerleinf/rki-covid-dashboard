import { RkiDelta, RkiMetaRaw, RkiRValueRaw } from 'src/app/core/models';

export interface RkiGermanyRaw {
  cases: number;
  deaths: number;
  recovered: number;
  weekIncidence: number;
  casesPer100k: number;
  casesPerWeek: number;
  delta: RkiDelta;
  r: RkiRValueRaw;
  meta: RkiMetaRaw;
}
