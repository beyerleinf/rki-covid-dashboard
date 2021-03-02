import 'jest-preset-angular';
import * as dayjs from 'dayjs';
import * as isoWeek from 'dayjs/plugin/isoWeek';
import * as updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(updateLocale);
dayjs.extend(isoWeek);

dayjs.updateLocale('en', {
  weekStart: 1, // set monday as first day of the week
});
