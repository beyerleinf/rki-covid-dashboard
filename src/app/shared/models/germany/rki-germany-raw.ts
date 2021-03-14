import { RkiDelta } from '../rki-delta';
import { RkiMetaRaw } from '../rki-meta-raw';
import { RkiRValueRaw } from '../rki-r-value-raw';

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
