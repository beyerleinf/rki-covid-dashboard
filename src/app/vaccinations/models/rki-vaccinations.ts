import { RkiMeta } from 'src/app/core/models';
import { RkiGermanyVaccinationData } from './rki-germany-vaccination-data';

export interface RkiVaccinations {
  data: RkiGermanyVaccinationData;
  meta: RkiMeta;
}
