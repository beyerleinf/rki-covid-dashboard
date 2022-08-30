import { RkiRValueBase, RkiRValueBaseRaw, RkiRValueRaw } from '../models';

export const parseRValue = (rvalue: RkiRValueBaseRaw): RkiRValueBase => ({
  date: new Date(rvalue.date),
  value: rvalue.value,
});
