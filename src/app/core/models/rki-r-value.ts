export interface RkiRValue extends RkiRValueBase {
  rValue4Days: RkiRValueBase;
  rValue7Days: RkiRValueBase;
}

export interface RkiRValueBase {
  value: number;
  date: Date;
}
