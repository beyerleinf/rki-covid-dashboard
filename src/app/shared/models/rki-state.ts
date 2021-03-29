import { RkiMeta } from './rki-meta';
import { RkiStatesData } from './rki-states-data';

export interface RkiState<T extends keyof RkiStatesData> {
  data: Pick<RkiStatesData, T>;
  meta: RkiMeta;
}
