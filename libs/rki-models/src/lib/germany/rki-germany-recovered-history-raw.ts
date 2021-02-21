import { RkiMetaRaw } from '../rki-meta-raw';
import { RkiRecoveredHistoryItemRaw } from '../rki-recovered-history-item-raw';

export interface RkiGermanyRecoveredHistoryRaw {
  data: RkiRecoveredHistoryItemRaw[];
  meta: RkiMetaRaw;
}
