import { RkiCaseHistoryItemRaw } from '../rki-case-history-item-raw';
import { RkiMetaRaw } from '../rki-meta-raw';

export interface RkiGermanyCaseHistoryRaw {
  data: RkiCaseHistoryItemRaw[];
  meta: RkiMetaRaw;
}
