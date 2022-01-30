import { RkiMeta, RkiRecoveredHistoryItem } from 'src/app/core/models';

export interface RkiGermanyRecoveredHistory {
  data: RkiRecoveredHistoryItem[];
  meta: RkiMeta;
}
