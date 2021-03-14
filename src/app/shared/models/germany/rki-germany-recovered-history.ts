import { RkiMeta } from '../rki-meta';
import { RkiRecoveredHistoryItem } from '../rki-recovered-history-item';

export interface RkiGermanyRecoveredHistory {
  data: RkiRecoveredHistoryItem[];
  meta: RkiMeta;
}
