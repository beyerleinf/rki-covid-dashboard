import { RkiMetaRaw } from 'src/app/core/models';
import { RkiGermanyVaccinationData } from './rki-germany-vaccination-data';

export interface RkiVaccinationsRaw {
  data: RkiGermanyVaccinationData;
  meta: RkiMetaRaw;
}
