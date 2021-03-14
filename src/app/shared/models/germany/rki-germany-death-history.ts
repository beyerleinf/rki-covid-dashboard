import { RkiDeathHistoryItem } from '../rki-death-history-item';
import { RkiMeta } from '../rki-meta';

export interface RkiGermanyDeathHistory {
  data: RkiDeathHistoryItem[];
  meta: RkiMeta;
}
