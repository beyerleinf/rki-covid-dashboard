import * as dayjs from 'dayjs';

export const groupByWeek = <T extends { date: Date }>(data: T[]): { [key: string]: T[] } =>
  data.reduce((acc: { [key: string]: T[] }, item) => {
    const parsedDate = dayjs(item.date);
    const key = `${parsedDate.isoWeekYear()}-${parsedDate.isoWeek()}`;

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(item);

    return acc;
  }, {});
