import { RkiMeta } from 'src/app/core/models';
import { RkiVaccinationHistoryItem } from './rki-vaccination-history-item';

export interface RkiVaccinationHistory {
  data: { history: RkiVaccinationHistoryItem[] };
  meta: RkiMeta;
}
