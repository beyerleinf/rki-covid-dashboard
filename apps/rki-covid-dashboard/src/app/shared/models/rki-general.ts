export interface RKIGeneral {
  cases: number;
  casesPer100k: number;
  casesPerWeek: number;
  deaths: number;
  lastUpdate: Date;
  recovered: number;
  weekIncidence: number;
  difference: Difference;
}

export interface Difference {
  recovered: number;
  cases: number;
  deaths: number;
}
