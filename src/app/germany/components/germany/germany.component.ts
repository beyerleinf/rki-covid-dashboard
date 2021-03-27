import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as dayjs from 'dayjs';
import { EChartsOption } from 'echarts';
import { forkJoin } from 'rxjs';
import { RkiApiService } from 'src/app/shared/services';
import { RkiCaseHistoryItem, RkiGermany, RkiGermanyCaseHistory, RkiGermanyDeathHistory } from '../../../shared/models';

@Component({
  selector: 'rkicovid-germany',
  templateUrl: './germany.component.html',
  styleUrls: ['./germany.component.scss'],
})
export class GermanyComponent implements OnInit {
  germany: RkiGermany;
  loading = false;

  currentLang = '';

  dashboardItems = [
    { title: 'common.cases', valueKey: 'cases' },
    { title: 'common.deaths', valueKey: 'deaths' },
    { title: 'common.recovered', valueKey: 'recovered' },
    { title: 'common.weekIncidence', valueKey: 'weekIncidence' },
    { title: 'common.casesPerWeek', valueKey: 'casesPerWeek' },
    { title: 'common.casesPer100k', valueKey: 'casesPer100k' },
  ];

  chartOptions: EChartsOption = {
    backgroundColor: 'transparent',
    textStyle: {
      color: 'rgba(255, 255, 255, 0.7)',
    },
    xAxis: {
      type: 'time',
      minInterval: 60 * 1000,
    },
    yAxis: {
      type: 'value',
    },
    tooltip: {
      trigger: 'axis',
    },
    color: ['#c2185b', '#18c27e', '#c218b1'],
    series: [
      {
        name: this.translate.instant('common.cases'),
        type: 'line',
        encode: { x: 'timestamp', y: 'cases' },
        markArea: {
          data: [
            [
              {
                name: this.translate.instant('common.firstLockdown'),
                xAxis: new Date(2020, 2, 15).getTime(),
                itemStyle: { opacity: 0.25 },
              },
              { xAxis: new Date(2020, 5, 15).getTime() },
              /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            ] as any,
            [
              {
                name: this.translate.instant('common.lockdownRelaxations'),
                xAxis: new Date(2021, 2, 7).getTime(),
                itemStyle: { opacity: 0.5 },
              },
              { xAxis: new Date(2021, 2, 24).getTime() },
              /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            ] as any,
            [
              {
                name: this.translate.instant('common.secondLockdown'),
                xAxis: new Date(2020, 11, 16).getTime(),
                itemStyle: { opacity: 0.25 },
              },
              { xAxis: new Date(2021, 3, 19).getTime() },
              /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            ] as any,
          ],
        },
        smooth: true,
      },
      {
        name: this.translate.instant('common.casesMean'),
        type: 'line',
        encode: { x: 'timestmp', y: 'casesMean' },
        smooth: true,
        connectNulls: true,
      },
      {
        name: this.translate.instant('common.deaths'),
        type: 'line',
        encode: { x: 'timestmp', y: 'deaths' },
        smooth: true,
      },
    ],
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none',
        },
        restore: {},
      },
    },
    legend: {},
    media: [
      {
        query: {
          maxWidth: 800,
        },
        option: {
          series: [
            {
              left: '10%',
              top: 0,
            },
          ],
        },
      },
    ],
    dataZoom: [
      {
        show: true,
        realtime: true,
        start: 60,
        end: 100,
        xAxisIndex: [0, 1],
      },
      {
        type: 'inside',
        realtime: true,
        start: 60,
        end: 100,
        xAxisIndex: [0, 1],
      },
    ],
  };

  constructor(private translate: TranslateService, private rkiService: RkiApiService) {
    this.currentLang = this.translate.currentLang;
    this.germany = {
      cases: 0,
      deaths: 0,
      casesPer100k: 0,
      casesPerWeek: 0,
      recovered: 0,
      weekIncidence: 0,
      r: {
        date: new Date(0),
        value: 0,
      },
      delta: {
        cases: 0,
        deaths: 0,
        recovered: 0,
      },
      meta: {
        contact: '',
        info: '',
        lastCheckedForUpdate: new Date(0),
        lastUpdate: new Date(0),
        source: '',
      },
    };
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
      this.currentLang = this.translate.currentLang;
      this.chartOptions = {
        ...this.chartOptions,
        series: [
          {
            ...(this.chartOptions.series as any)[0],
            name: this.translate.instant('common.cases'),
            markArea: {
              data: [
                [
                  {
                    name: this.translate.instant('common.firstLockdown'),
                    xAxis: new Date(2020, 2, 15).getTime(),
                    itemStyle: { opacity: 0.25 },
                  },
                  { xAxis: new Date(2020, 5, 15).getTime() },
                  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                ] as any,
                [
                  {
                    name: this.translate.instant('common.lockdownRelaxations'),
                    xAxis: new Date(2021, 2, 7).getTime(),
                    itemStyle: { opacity: 0.5 },
                  },
                  { xAxis: new Date(2021, 2, 24).getTime() },
                  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                ] as any,
                [
                  {
                    name: this.translate.instant('common.secondLockdown'),
                    xAxis: new Date(2020, 11, 16).getTime(),
                    itemStyle: { opacity: 0.25 },
                  },
                  { xAxis: new Date(2021, 3, 19).getTime() },
                  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                ] as any,
              ],
            },
          },
          { ...(this.chartOptions.series as any)[1], name: this.translate.instant('common.casesMean') },
          { ...(this.chartOptions.series as any)[2], name: this.translate.instant('common.deaths') },
        ],
      };
    });

    this.loading = true;
    forkJoin([
      this.rkiService.germany(),
      this.rkiService.germanyCaseHistory(),
      this.rkiService.germanyDeathHistory(),
    ]).subscribe(response => {
      this.germany = response[0];
      this.buildHistoryChart(response[1], response[2], this.generateCaseHistoryMean(response[1]));
      this.loading = false;
    });
  }

  private buildHistoryChart(
    caseHistory: RkiGermanyCaseHistory,
    deathHistory: RkiGermanyDeathHistory,
    caseHistoryMean: Array<{
      date: Date;
      cases: number;
      last: boolean;
    }>
  ) {
    const source = [];

    if (
      caseHistory.data.length > 0 &&
      caseHistoryMean.length > 0 &&
      deathHistory.data.length > 0 &&
      caseHistory.data.length === caseHistoryMean.length &&
      caseHistory.data.length === deathHistory.data.length
    ) {
      for (let i = 0; i < caseHistory.data.length; i++) {
        const caseHistoryItem = caseHistory.data[i];
        const caseHistoryMeanItem = caseHistoryMean[i];
        const deathHistoryItem = deathHistory.data[i];

        source.push([
          caseHistoryItem.date,
          caseHistoryItem.cases,
          deathHistoryItem.deaths,
          caseHistoryMeanItem.last ? caseHistoryMeanItem.cases : undefined,
        ]);
      }

      this.chartOptions = {
        ...this.chartOptions,
        dataset: [{ source: source as any, dimensions: ['timestamp', 'cases', 'deaths', 'casesMean'] }],
      };
    }
  }

  private generateCaseHistoryMean(caseHistory: RkiGermanyCaseHistory) {
    const caseHistoryMean: Array<RkiCaseHistoryItem & { last: boolean }> = [];
    const groupedCaseHistory = this.groupData(caseHistory.data);

    for (const key of Object.keys(groupedCaseHistory)) {
      const group = groupedCaseHistory[key];
      const mean = Math.round(group.reduce((acc, value) => (acc += value.cases), 9) / group.length);
      caseHistoryMean.push(
        ...group.map((item, idx) => ({ date: item.date, cases: mean, last: idx === group.length - 1 }))
      );
    }

    return caseHistoryMean;
  }

  private groupData<T extends { date: Date }>(data: T[]): { [key: string]: T[] } {
    return data.reduce((acc: { [key: string]: T[] }, item) => {
      const parsedDate = dayjs(item.date);
      const key = `${parsedDate.isoWeekYear()}-${parsedDate.isoWeek()}`;

      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push(item);

      return acc;
    }, {});
  }
}
