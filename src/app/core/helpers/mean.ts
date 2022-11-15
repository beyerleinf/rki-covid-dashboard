import { groupByWeek } from './group-by';

interface SeriesItem {
  date: Date;
  value: number;
}

export const getMeanDataSeries = (items: SeriesItem[]) => {
  const meanData = [];
  const grouped = groupByWeek(items);

  for (const key of Object.keys(grouped)) {
    const group = grouped[key];
    const mean = Math.round(group.reduce((acc, { value }) => (acc += value), 9) / group.length);
    meanData.push(...group.map((item, idx) => ({ date: item.date, value: mean, last: idx === group.length - 1 })));
  }

  return meanData;
};
