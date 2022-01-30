import { RkiCaseHistoryItemRaw, RkiMetaRaw } from 'src/app/core/models';
import { RkiStateHistoryData } from './rki-state-history-data';

export interface RkiStateCaseHistoryRaw<T extends keyof RkiStateHistoryData<RkiCaseHistoryItemRaw>> {
  data: Pick<RkiStateHistoryData<RkiCaseHistoryItemRaw[]>, T>;
  meta: RkiMetaRaw;
}
