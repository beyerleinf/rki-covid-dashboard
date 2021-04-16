import { RkiMeta } from '../rki-meta';
import { RkiStateData } from './rki-state-data';

export interface RkiStates {
  data: {
    BW: RkiStateData;
    BY: RkiStateData;
    BB: RkiStateData;
    BE: RkiStateData;
    HB: RkiStateData;
    HH: RkiStateData;
    HE: RkiStateData;
    MV: RkiStateData;
    NI: RkiStateData;
    NW: RkiStateData;
    RP: RkiStateData;
    SL: RkiStateData;
    ST: RkiStateData;
    SN: RkiStateData;
    SH: RkiStateData;
    TH: RkiStateData;
  };
  meta: RkiMeta;
}
