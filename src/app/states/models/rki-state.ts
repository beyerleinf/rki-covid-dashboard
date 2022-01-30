import { RkiMeta } from 'src/app/core/models';
import { RkiStatesData } from './rki-states-data';

export interface RkiState<T extends keyof RkiStatesData> {
  data: Pick<RkiStatesData, T>;
  meta: RkiMeta;
}
