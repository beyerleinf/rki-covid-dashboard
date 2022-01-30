import { RkiCaseHistoryItemRaw, RkiMetaRaw } from 'src/app/core/models';

export interface RkiGermanyCaseHistoryRaw {
  data: RkiCaseHistoryItemRaw[];
  meta: RkiMetaRaw;
}
