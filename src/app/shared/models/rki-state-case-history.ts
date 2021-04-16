import { RkiCaseHistoryItem } from './rki-case-history-item';
import { RkiMeta } from './rki-meta';
import { RkiStateHistoryData } from './rki-state-history-data';

export interface RkiStateCaseHistory<T extends keyof RkiStateHistoryData<RkiCaseHistoryItem>> {
  data: Pick<RkiStateHistoryData<RkiCaseHistoryItem[]>, T>;
  meta: RkiMeta;
}
