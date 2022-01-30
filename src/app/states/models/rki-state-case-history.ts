import { RkiCaseHistoryItem, RkiMeta } from 'src/app/core/models';
import { RkiStateHistoryData } from './rki-state-history-data';

export interface RkiStateCaseHistory<T extends keyof RkiStateHistoryData<RkiCaseHistoryItem>> {
  data: Pick<RkiStateHistoryData<RkiCaseHistoryItem[]>, T>;
  meta: RkiMeta;
}
