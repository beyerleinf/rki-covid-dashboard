import { RkiCaseHistoryItemRaw } from '../rki-case-history-item-raw';
import { RkiMetaRaw } from '../rki-meta-raw';
import { RkiStateHistoryData } from './rki-state-history-data';

export interface RkiStateCaseHistoryRaw<T extends keyof RkiStateHistoryData<RkiCaseHistoryItemRaw>> {
  data: Pick<RkiStateHistoryData<RkiCaseHistoryItemRaw[]>, T>;
  meta: RkiMetaRaw;
}
