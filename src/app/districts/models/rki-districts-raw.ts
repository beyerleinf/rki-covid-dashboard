import { RkiMetaRaw } from 'src/app/core/models';
import { RkiDistrictData } from './rki-district-data';

export interface RkiDistrictsRaw {
  data: { [key: string]: RkiDistrictData };
  meta: RkiMetaRaw;
}
