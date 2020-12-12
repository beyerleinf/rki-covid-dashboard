export interface RKIDistricts {
  lastUpdate: string;
  districts: District[];
}

export interface District {
  name: string;
  county: string;
  count: number;
  deaths: number;
  weekIncidence: number;
  casesPer100k: number;
  casesPerPopulation: number;
}
