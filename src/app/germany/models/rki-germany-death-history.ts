import { RkiDeathHistoryItem, RkiMeta } from 'src/app/core/models';

export interface RkiGermanyDeathHistory {
  data: RkiDeathHistoryItem[];
  meta: RkiMeta;
}
