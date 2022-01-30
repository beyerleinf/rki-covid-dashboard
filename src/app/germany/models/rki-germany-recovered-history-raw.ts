import { RkiMetaRaw, RkiRecoveredHistoryItemRaw } from 'src/app/core/models';

export interface RkiGermanyRecoveredHistoryRaw {
  data: RkiRecoveredHistoryItemRaw[];
  meta: RkiMetaRaw;
}
