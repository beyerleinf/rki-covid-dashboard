import { RKIGeneral, State } from '../shared/models';

export interface AppState {
  rkiGeneralData: RKIGeneral;
  timeseries: { source: Array<Array<Date | number>>; dimensions: string[] };
  rkiStateData: State;
}
