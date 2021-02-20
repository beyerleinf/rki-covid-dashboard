import { Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { EChartsOption } from 'echarts';
import { AppState } from '../../../shared/state/app-state';
import {
  RKI_GERMANY,
  RKI_GERMANY_CASE_HISTORY,
  RKI_GERMANY_DEATH_HISTORY,
  RKI_GERMANY_RECOVERED_HISTORY,
} from '../../../shared/state/ngrx-constants';

@Component({
  selector: 'rkicovid-germany',
  templateUrl: './germany.component.html',
  styleUrls: ['./germany.component.scss'],
})
export class GermanyComponent implements OnInit {
  germany$ = this.store.select(state => state.germany.germany);
  isLoading$ = this.store.select(state => state.germany.isLoading);
  isHistoryLoading$ = this.store.select(
    state =>
      state.germanyCaseHistory.isLoading &&
      state.germanyDeathHistory.isLoading &&
      state.germanyRecoveredHistory.isLoading
  );

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
    color: ['#c2185b', '#c218b1', '#18c27e'],
    series: [
      {
        name: this.translate.instant('common.cases'),
        type: 'line',
        encode: { x: 'timestamp', y: 'cases' },
        animationDelay: (idx: number) => idx * 10,
        markArea: {
          data: [
            [
              {
                name: this.translate.instant('common.firstLockdown'),
                xAxis: new Date(2020, 2, 15).getTime(),
                itemStyle: { opacity: 0.25 },
              },
              { xAxis: new Date(2020, 5, 15).getTime() },
            ] as any,
            [
              {
                name: this.translate.instant('common.secondLockdown'),
                xAxis: new Date(2020, 11, 16).getTime(),
                itemStyle: { opacity: 0.25 },
              },
              { xAxis: new Date(2021, 2, 8).getTime() },
            ] as any,
          ],
        },
        smooth: true,
      },
      {
        name: this.translate.instant('common.deaths'),
        type: 'line',
        encode: { x: 'timestmp', y: 'deaths' },
        smooth: true,
      },
      {
        name: this.translate.instant('common.recovered'),
        type: 'line',
        encode: { x: 'timestmp', y: 'recovered' },
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

  constructor(private store: Store<AppState>, private translate: TranslateService) {
    this.store.dispatch({ type: RKI_GERMANY });
    this.store.dispatch({ type: RKI_GERMANY_CASE_HISTORY });
    this.store.dispatch({ type: RKI_GERMANY_DEATH_HISTORY });
    this.store.dispatch({ type: RKI_GERMANY_RECOVERED_HISTORY });

    this.currentLang = this.translate.currentLang;
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
      this.currentLang = this.translate.currentLang;
      this.chartOptions = {
        ...this.chartOptions,
        series: [
          {
            ...this.chartOptions.series[0],
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
                ] as any,
                [
                  {
                    name: this.translate.instant('common.secondLockdown'),
                    xAxis: new Date(2020, 11, 16).getTime(),
                    itemStyle: { opacity: 0.25 },
                  },
                  { xAxis: new Date(2021, 2, 8).getTime() },
                ] as any,
              ],
            },
          },
          { ...this.chartOptions.series[1], name: this.translate.instant('common.deaths') },
          { ...this.chartOptions.series[2], name: this.translate.instant('common.recovered') },
        ],
      };
    });

    this.store
      .select(state => state)
      .subscribe(state => {
        const source = [];

        if (
          state.germanyCaseHistory.germanyCaseHistory.data.length > 0 &&
          state.germanyDeathHistory.germanyDeathHistory.data.length > 0 &&
          state.germanyRecoveredHistory.germanyRecoveredHistory.data.length > 0
        ) {
          for (let i = 0; i < state.germanyCaseHistory.germanyCaseHistory.data.length; i++) {
            const caseHistoryItem = state.germanyCaseHistory.germanyCaseHistory.data[i];
            const deathHistoryItem = state.germanyDeathHistory.germanyDeathHistory.data[i];
            const recoveredHistoryItem = state.germanyRecoveredHistory.germanyRecoveredHistory.data[i];

            source.push([
              caseHistoryItem.date,
              caseHistoryItem.cases,
              deathHistoryItem.deaths,
              recoveredHistoryItem.recovered,
            ]);
          }

          this.chartOptions = {
            ...this.chartOptions,
            dataset: [{ source, dimensions: ['timestamp', 'cases', 'deaths', 'recovered'] }],
          };
        }
      });
  }
}
