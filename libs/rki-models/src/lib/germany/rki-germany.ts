import { RkiDelta } from '../rki-delta';
import { RkiMeta } from '../rki-meta';
import { RkiRValue } from '../rki-r-value';

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
