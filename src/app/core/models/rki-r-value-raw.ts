export interface RkiRValueRaw extends RkiRValueBaseRaw {
  rValue4Days: RkiRValueBaseRaw;
  rValue7Days: RkiRValueBaseRaw;
}

export interface RkiRValueBaseRaw {
  value: number;
  date: string;
}
