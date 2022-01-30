import { RkiMetaRaw } from 'src/app/core/models';
import { RkiVaccinationHistoryItemRaw } from './rki-vaccination-history-item-raw';

export interface RkiVaccinationHistoryRaw {
  data: { history: RkiVaccinationHistoryItemRaw[] };
  meta: RkiMetaRaw;
}
