import { RkiMeta } from '../rki-meta';
import { RkiVaccinationHistoryItem } from './rki-vaccination-history-item';

export interface RkiVaccinationHistory {
  data: { history: RkiVaccinationHistoryItem[] };
  meta: RkiMeta;
}
