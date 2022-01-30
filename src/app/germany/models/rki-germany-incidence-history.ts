import { RkiIncidenceHistoryItem, RkiMeta } from 'src/app/core/models';

export interface RkiGermanyIncidenceHistory {
  data: RkiIncidenceHistoryItem[];
  meta: RkiMeta;
}
