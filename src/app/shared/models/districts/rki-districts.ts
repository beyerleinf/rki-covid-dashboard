import { RkiDistrictData } from './rki-district-data';
import { RkiMeta } from '../rki-meta';

export interface RkiDistricts {
  data: { [key: string]: RkiDistrictData };
  meta: RkiMeta;
}
