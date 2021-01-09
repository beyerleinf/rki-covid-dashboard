// export enum States {
//   /**
//    * Baden-Württemberg
//    */
//   BW = 'BW',

//   /**
//    * Bayern
//    */
//   BY = 'BY',

//   /**
//    * Brandenburg
//    */
//   BB = 'BB',

//   /**
//    * Berlin
//    */
//   BE = 'BE',

//   /**
//    * Bremen
//    */
//   HB = 'HB',

//   /**
//    * Hamburg
//    */
//   HH = 'HH',

//   /**
//    * Hessen
//    */
//   HE = 'HE',

//   /**
//    * Mecklenburg-Vorpommern
//    */
//   MV = 'MV',

//   /**
//    * Niedersachsen
//    */
//   NI = 'NI',

//   /**
//    * Nordrhein-Westfalen
//    */
//   NW = 'NW',

//   /**
//    * Rheinland-Pfalz
//    */
//   RP = 'RP',

//   /**
//    * Saarland
//    */
//   SL = 'SL',

//   /**
//    * Sachsen-Anhalt
//    */
//   ST = 'ST',

//   /**
//    * Sachsen
//    */
//   SN = 'SN',

//   /**
//    * Schleswig-Holstein
//    */
//   SH = 'SH',

//   /**
//    * Thüringen
//    */
//   TH = 'TH',
// }

export type StateType =
  | 'BW'
  | 'BY'
  | 'BB'
  | 'BE'
  | 'HB'
  | 'HH'
  | 'HE'
  | 'MV'
  | 'NI'
  | 'NW'
  | 'RP'
  | 'SL'
  | 'ST'
  | 'SN'
  | 'SH'
  | 'TH';

export interface States<T> {
  BW: T;
  BY: T;
  BB: T;
  BE: T;
  HB: T;
  HH: T;
  HE: T;
  MV: T;
  NI: T;
  NW: T;
  RP: T;
  SL: T;
  ST: T;
  SN: T;
  SH: T;
  TH: T;
}
