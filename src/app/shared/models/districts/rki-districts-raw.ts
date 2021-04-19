import { RkiDistrictData } from './rki-district-data';
import { RkiMetaRaw } from '../rki-meta-raw';

export interface RkiDistrictsRaw {
  data: { [key: string]: RkiDistrictData };
  meta: RkiMetaRaw;
}
