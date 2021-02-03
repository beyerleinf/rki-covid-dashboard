import { RkiCaseHistoryItem } from '../rki-case-history-item';
import { RkiMeta } from '../rki-meta';

export interface RkiGermanyCaseHistory {
  data: RkiCaseHistoryItem[];
  meta: RkiMeta;
}
