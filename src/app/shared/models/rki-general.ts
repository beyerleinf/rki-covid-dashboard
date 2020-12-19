export interface RKIGeneral {
  lastUpdate: Date;
  recovered: number;
  cases: number;
  deaths: number;
  weekIncidence: number;
  difference: Difference;
}

export interface Difference {
  recovered: number;
  cases: number;
  deaths: number;
}
