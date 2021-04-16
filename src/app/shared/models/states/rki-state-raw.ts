import { RkiMetaRaw } from '../rki-meta-raw';
import { RkiStatesData } from './rki-states-data';

export interface RkiStateRaw<T extends keyof RkiStatesData> {
  data: Pick<RkiStatesData, T>;
  meta: RkiMetaRaw;
}
