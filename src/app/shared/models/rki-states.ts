export interface RKIStates {
  lastUpdate: number;
  states: State[];
}

export interface State {
  name: string;
  count: number;
  weekIncidence: number;
  casesPer100k: number;
  deaths: number;
  code: string;
}
