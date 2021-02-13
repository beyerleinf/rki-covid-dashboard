import { RkiMeta } from '../rki-meta';
import { RkiGermanyVaccinationData } from './rki-germany-vaccination-data';

export interface RkiVaccinations {
  data: RkiGermanyVaccinationData;
  meta: RkiMeta;
}
