import { RkiMeta } from 'src/app/core/models';
import { RkiDistrictData } from './rki-district-data';

export interface RkiDistricts {
  data: { [key: string]: RkiDistrictData };
  meta: RkiMeta;
}
