export interface RkiRValue extends RkiRValueBase {
  rValue4Days: RkiRValueBase;
  rValue7Days: RkiRValueBase;
}

interface RkiRValueBase {
  value: number;
  date: Date;
}
