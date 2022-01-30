export interface RkiRValueRaw extends RkiRValueBaseRaw {
  rValue4Days: RkiRValueBaseRaw;
  rValue7Days: RkiRValueBaseRaw;
}

interface RkiRValueBaseRaw {
  value: number;
  date: string;
}
