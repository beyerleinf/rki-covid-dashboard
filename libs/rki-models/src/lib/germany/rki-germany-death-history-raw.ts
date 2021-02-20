import { RkiDeathHistoryItemRaw } from '../rki-death-history-item-raw';
import { RkiMetaRaw } from '../rki-meta-raw';

export interface RkiGermanyDeathHistoryRaw {
  data: RkiDeathHistoryItemRaw[];
  meta: RkiMetaRaw;
}
