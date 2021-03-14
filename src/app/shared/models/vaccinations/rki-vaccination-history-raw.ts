import { RkiMetaRaw } from '../rki-meta-raw';
import { RkiVaccinationHistoryItemRaw } from './rki-vaccination-history-item-raw';

export interface RkiVaccinationHistoryRaw {
  data: { history: RkiVaccinationHistoryItemRaw[] };
  meta: RkiMetaRaw;
}
