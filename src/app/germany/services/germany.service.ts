import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { EChartsOption } from 'echarts';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { getMeanDataSeries } from 'src/app/core/helpers';
import { RkiGermany, RkiGermanyCaseHistory, RkiGermanyDeathHistory } from '../models';
import { GermanyEndpointService } from './germany-endpoint/germany-endpoint.service';

interface Lockdown {
  start: Date;
  end: Date;
  name: string;
  color: string;
}

@UntilDestroy()
@Injectable()
export class GermanyService {
  private germanySubject = new BehaviorSubject<RkiGermany>({
    cases: 0,
    casesPer100k: 0,
    casesPerWeek: 0,
    deaths: 0,
    delta: {
      cases: 0,
      deaths: 0,
      recovered: 0,
    },
    meta: {
      contact: '',
      info: '',
      lastCheckedForUpdate: new Date(),
      lastUpdate: new Date(),
      source: '',
    },
    r: {
      date: new Date(),
      rValue4Days: {
        date: new Date(),
        value: 0,
      },
      rValue7Days: {
        date: new Date(),
        value: 0,
      },
      value: 0,
    },
    recovered: 0,
    weekIncidence: 0,
  });

  private loadingSubject = new BehaviorSubject<boolean>(false);

  private chartDataSubject = new BehaviorSubject<EChartsOption | null>(null);

  private readonly lockdowns: Lockdown[] = [
    // { start: new Date(2020, 2, 22), end: new Date(2020, 5, 4), name: 'common.firstLockdown', color: '#c2185b' },
    // { start: new Date(2020, 10, 2), end: new Date(2020, 11, 14), name: 'common.partialLockdown', color: '#18c27e' },
    // { start: new Date(2020, 11, 14), end: new Date(2021, 4, 10), name: 'common.hardLockdown', color: '#c2185b' },
    // { start: new Date(2021, 2, 7), end: new Date(2021, 2, 24), name: 'common.lockdownRelaxations', color: '#c218b1' },
  ];

  constructor(private endpointService: GermanyEndpointService, private translateService: TranslateService) {
    this.loadData();

    this.translateService.onLangChange.pipe(untilDestroyed(this)).subscribe(() => {
      this.chartDataSubject.next(this.getUpdatedChartOptions(this.chartDataSubject.getValue() || {}));
    });
  }

  get loading$() {
    return this.loadingSubject.asObservable();
  }

  get germany$() {
    return this.germanySubject.asObservable();
  }

  get chartData$() {
    return this.chartDataSubject.asObservable();
  }

  private loadData() {
    this.loadingSubject.next(true);

    forkJoin([
      this.endpointService.get(),
      this.endpointService.getCaseHistory(),
      this.endpointService.getDeathHistory(),
    ]).subscribe(([germany, cases, deaths]) => {
      this.germanySubject.next(germany);
      this.generateChartData(cases, deaths);

      this.loadingSubject.next(false);
    });
  }

  private generateChartData(cases: RkiGermanyCaseHistory, deaths: RkiGermanyDeathHistory) {
    const source = [];

    const caseHistoryMean = getMeanDataSeries(cases.data.map(e => ({ date: e.date, value: e.cases })));

    for (let i = 0; i < cases.data.length; i++) {
      const caseHistoryItem = cases.data[i];
      const caseHistoryMeanItem = caseHistoryMean[i];
      const deathHistoryItem = deaths.data[i];

      source.push([
        caseHistoryItem.date,
        caseHistoryItem.cases,
        deathHistoryItem.deaths,
        caseHistoryMeanItem.last ? caseHistoryMeanItem.value : undefined,
      ]);

      this.chartDataSubject.next({
        ...this.getChartOptions(),
        dataset: [{ source: source as any, dimensions: ['timestamp', 'cases', 'deaths', 'casesMean'] }],
      });
    }
  }

  private getChartOptions(): EChartsOption {
    return {
      backgroundColor: 'transparent',
      textStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
      },
      xAxis: {
        type: 'time',
        minInterval: 60 * 1000,
      },
      yAxis: [{ type: 'value' }, { type: 'value' }],
      tooltip: {
        trigger: 'axis',
      },
      color: ['#c2185b', '#18c27e', '#c218b1'],
      series: [
        {
          name: this.translateService.instant('common.cases'),
          type: 'line',
          encode: { x: 'timestamp', y: 'cases' },
          markArea: {
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            data: this.getLockdowns() as any,
          },
          smooth: true,
        },
        {
          name: this.translateService.instant('common.casesMean'),
          type: 'line',
          encode: { x: 'timestamp', y: 'casesMean' },
          smooth: true,
          connectNulls: true,
        },
        {
          name: this.translateService.instant('common.deaths'),
          type: 'bar',
          encode: { x: 'timestamp', y: 'deaths' },
          itemStyle: {
            opacity: 0.5,
          },
          yAxisIndex: 1,
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
  }

  private getLockdowns() {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const result: any[] = [];

    for (const lockdown of this.lockdowns) {
      result.push([
        {
          name: this.translateService.instant(lockdown.name),
          xAxis: lockdown.start.getTime(),
          itemStyle: { opacity: 0.125, color: lockdown.color },
        },
        { xAxis: lockdown.end.getTime() },
      ]);
    }

    return result;
  }

  private getUpdatedChartOptions(initial: EChartsOption) {
    const newValue = { ...initial };

    (newValue.series as any)[0].name = this.translateService.instant('common.cases');
    (newValue.series as any)[0].markArea.data = this.getLockdowns();
    (newValue.series as any)[1].name = this.translateService.instant('common.casesMean');
    (newValue.series as any)[2].name = this.translateService.instant('common.deaths');

    return newValue;
  }
}
