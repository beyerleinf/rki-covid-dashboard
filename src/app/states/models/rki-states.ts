/* eslint-disable @typescript-eslint/naming-convention */

import { RkiMeta } from 'src/app/core/models';
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
