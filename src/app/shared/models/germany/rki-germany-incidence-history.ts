import { RkiIncidenceHistoryItem } from '../rki-incidence-history-item';
import { RkiMeta } from '../rki-meta';

export interface RkiGermanyIncidenceHistory {
  data: RkiIncidenceHistoryItem[];
  meta: RkiMeta;
}
