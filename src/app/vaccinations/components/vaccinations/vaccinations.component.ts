import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EChartsOption } from 'echarts';
import { forkJoin, Subject, takeUntil } from 'rxjs';
import { RkiStateVaccinationData, RkiVaccinationHistory, RkiVaccinations } from '../../models';
import { VaccinationsService } from '../../services';

@Component({
  selector: 'rkicovid-vaccinations',
  templateUrl: './vaccinations.component.html',
  styleUrls: ['./vaccinations.component.scss'],
})
export class VaccinationsComponent implements OnInit, OnDestroy {
  vaccinations: RkiVaccinations;
  loading = false;
  currentLang = '';

  dashboardItems = [
    { title: 'vaccinations.vaccinated', valueKey: 'vaccinated', difference: 'delta', boosterVaccination: true },
    { title: 'vaccinations.quote', valueKey: 'quote', format: '1.1-1', unit: '%', boosterVaccination: true },
  ];

  vaccinationItems = [
    {
      title: 'vaccinations.manufacturers.biontech',
      valueKey: 'biontech',
      secondVaccination: true,
      boosterVaccination: true,
    },
    {
      title: 'vaccinations.manufacturers.moderna',
      valueKey: 'moderna',
      secondVaccination: true,
      boosterVaccination: true,
    },
    {
      title: 'vaccinations.manufacturers.astraZeneca',
      valueKey: 'astraZeneca',
      secondVaccination: true,
      boosterVaccination: false,
    },
    {
      title: 'vaccinations.manufacturers.janssen',
      valueKey: 'janssen',
      secondVaccination: false,
      boosterVaccination: true,
    },
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
        name: this.translate.instant('vaccinations.firstVaccination'),
        type: 'line',
        encode: { x: 'timestamp', y: 'firstVaccination' },
        smooth: true,
      },
      {
        name: this.translate.instant('vaccinations.secondVaccination'),
        type: 'line',
        encode: { x: 'timestamp', y: 'secondVaccination' },
        smooth: true,
      },
      {
        name: this.translate.instant('vaccinations.boosterVaccination'),
        type: 'line',
        encode: { x: 'timestamp', y: 'boosterVaccination' },
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
        xAxisIndex: [0, 1],
      },
      {
        type: 'inside',
        realtime: true,
        xAxisIndex: [0, 1],
      },
    ],
  };

  private _destroying$ = new Subject<void>();

  constructor(private vaccinationsService: VaccinationsService, private translate: TranslateService) {
    const stateInitial: RkiStateVaccinationData = {
      administeredVaccinations: 0,
      delta: 0,
      name: '',
      quote: 0,
      vaccinated: 0,
      secondVaccination: {
        delta: 0,
        quote: 0,
        vaccinated: 0,
        vaccination: {
          biontech: 0,
          moderna: 0,
          astraZeneca: 0,
        },
      },
      boosterVaccination: {
        delta: 0,
        vaccinated: 0,
        quote: 0,
        vaccination: {
          biontech: 0,
          moderna: 0,
          janssen: 0,
        },
      },
      vaccination: {
        astraZeneca: 0,
        biontech: 0,
        moderna: 0,
        janssen: 0,
      },
    };

    this.vaccinations = {
      data: {
        administeredVaccinations: 0,
        delta: 0,
        quote: 0,
        secondVaccination: {
          delta: 0,
          quote: 0,
          vaccinated: 0,
          vaccination: {
            biontech: 0,
            moderna: 0,
            astraZeneca: 0,
          },
        },
        boosterVaccination: {
          delta: 0,
          vaccinated: 0,
          quote: 0,
          vaccination: {
            biontech: 0,
            moderna: 0,
            janssen: 0,
          },
        },
        states: {
          /* eslint-disable @typescript-eslint/naming-convention */
          BB: stateInitial,
          BE: stateInitial,
          BW: stateInitial,
          BY: stateInitial,
          HB: stateInitial,
          HE: stateInitial,
          HH: stateInitial,
          MV: stateInitial,
          NI: stateInitial,
          NW: stateInitial,
          RP: stateInitial,
          SL: stateInitial,
          SN: stateInitial,
          ST: stateInitial,
          TH: stateInitial,
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        vaccinated: 0,
        vaccination: {
          astraZeneca: 0,
          biontech: 0,
          moderna: 0,
          janssen: 0,
        },
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
    this.translate.onLangChange.pipe(takeUntil(this._destroying$)).subscribe(() => {
      this.currentLang = this.translate.currentLang;
      this.chartOptions = {
        ...this.chartOptions,
        series: [
          { ...(this.chartOptions.series as any)[0], name: this.translate.instant('vaccinations.firstVaccination') },
          {
            ...(this.chartOptions.series as any)[1],
            name: this.translate.instant('vaccinations.secondVaccination'),
          },
          {
            ...(this.chartOptions.series as any)[2],
            name: this.translate.instant('vaccinations.boosterVaccination'),
          },
        ],
      };
    });

    this.loading = true;

    forkJoin([this.vaccinationsService.get(), this.vaccinationsService.getHistory()]).subscribe(response => {
      this.vaccinations = response[0];
      this.buildHistoryChart(response[1]);
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this._destroying$.next();
    this._destroying$.complete();
  }

  private buildHistoryChart(vaccinationHistory: RkiVaccinationHistory) {
    const source = [];

    for (const vaccinationHistoryItem of vaccinationHistory.data.history) {
      source.push([
        vaccinationHistoryItem.date,
        vaccinationHistoryItem.firstVaccination,
        vaccinationHistoryItem.secondVaccination,
        vaccinationHistoryItem.boosterVaccination,
      ]);
    }

    this.chartOptions = {
      ...this.chartOptions,
      dataset: [
        {
          source,
          dimensions: ['timestamp', 'firstVaccination', 'secondVaccination', 'boosterVaccination'],
        },
      ],
    };
  }
}
