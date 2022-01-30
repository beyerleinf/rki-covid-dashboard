import { RkiDeathHistoryItemRaw, RkiMetaRaw } from 'src/app/core/models';

export interface RkiGermanyDeathHistoryRaw {
  data: RkiDeathHistoryItemRaw[];
  meta: RkiMetaRaw;
}
