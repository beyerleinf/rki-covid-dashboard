import { RkiMetaRaw } from '../rki-meta-raw';
import { RkiGermanyVaccinationData } from './rki-germany-vaccination-data';

export interface RkiVaccinationsRaw {
  data: RkiGermanyVaccinationData;
  meta: RkiMetaRaw;
}
