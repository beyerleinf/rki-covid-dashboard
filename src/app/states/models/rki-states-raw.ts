import { RkiMetaRaw } from 'src/app/core/models';
import { RkiStatesData } from './rki-states-data';

export interface RkiStatesRaw {
  data: RkiStatesData;
  meta: RkiMetaRaw;
}
