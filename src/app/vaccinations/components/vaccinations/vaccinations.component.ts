import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EChartsOption } from 'echarts';
import { forkJoin } from 'rxjs';
import { RkiStateVaccinationData, RkiVaccinationHistory, RkiVaccinations } from 'src/app/shared/models';
import { RkiApiService } from 'src/app/shared/services';

@Component({
  selector: 'rkicovid-vaccinations',
  templateUrl: './vaccinations.component.html',
  styleUrls: ['./vaccinations.component.scss'],
})
export class VaccinationsComponent implements OnInit {
  vaccinations: RkiVaccinations;
  loading = false;
  currentLang = '';

  dashboardItems = [
    { title: 'vaccinations.vaccinated', valueKey: 'vaccinated', difference: 'delta' },
    { title: 'vaccinations.quote', valueKey: 'quote', format: '1.1-1', unit: '%' },
  ];

  vaccinationItems = [
    { title: 'vaccinations.manufacturers.biontech', valueKey: 'biontech' },
    { title: 'vaccinations.manufacturers.moderna', valueKey: 'moderna' },
    { title: 'vaccinations.manufacturers.astraZeneca', valueKey: 'astraZeneca' },
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
    color: ['#c2185b', '#18c27e'],
    series: [
      {
        name: this.translate.instant('vaccinations.firstVaccination'),
        type: 'line',
        encode: { x: 'timestmp', y: 'firstVaccination' },
        smooth: true,
      },
      {
        name: this.translate.instant('vaccinations.secondVaccination'),
        type: 'line',
        encode: { x: 'timestmp', y: 'secondVaccination' },
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

  constructor(private rkiService: RkiApiService, private translate: TranslateService) {
    const stateInitial: RkiStateVaccinationData = {
      administeredVaccinations: 0,
      delta: 0,
      indication: {
        age: 0,
        job: 0,
        medical: 0,
        nursingHome: 0,
        secondVaccination: {
          age: 0,
          job: 0,
          medical: 0,
          nursingHome: 0,
        },
      },
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
        },
      },
      vaccination: {
        astraZeneca: 0,
        biontech: 0,
        moderna: 0,
      },
    };

    this.vaccinations = {
      data: {
        administeredVaccinations: 0,
        delta: 0,
        indication: {
          age: 0,
          job: 0,
          medical: 0,
          nursingHome: 0,
          secondVaccination: {
            age: 0,
            job: 0,
            medical: 0,
            nursingHome: 0,
          },
        },
        quote: 0,
        secondVaccination: {
          delta: 0,
          quote: 0,
          vaccinated: 0,
          vaccination: {
            biontech: 0,
            moderna: 0,
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
    this.translate.onLangChange.subscribe(() => {
      this.currentLang = this.translate.currentLang;
      this.chartOptions = {
        ...this.chartOptions,
        series: [
          { ...(this.chartOptions.series as any)[0], name: this.translate.instant('vaccinations.firstVaccination') },
          {
            ...(this.chartOptions.series as any)[1],
            name: this.translate.instant('vaccinations.secondVaccination'),
          },
        ],
      };
    });

    this.loading = true;

    forkJoin([this.rkiService.vaccinations(), this.rkiService.vaccinationHistory()]).subscribe(response => {
      this.vaccinations = response[0];
      this.buildHistoryChart(response[1]);
      this.loading = false;
    });
  }

  private buildHistoryChart(vaccinationHistory: RkiVaccinationHistory) {
    const source = [];

    for (const vaccinationHistoryItem of vaccinationHistory.data.history) {
      source.push([
        vaccinationHistoryItem.date,
        vaccinationHistoryItem.firstVaccination,
        vaccinationHistoryItem.secondVaccination,
      ]);
    }

    this.chartOptions = {
      ...this.chartOptions,
      dataset: [
        {
          source,
          dimensions: ['timestamp', 'firstVaccination', 'secondVaccination'],
        },
      ],
    };
  }
}
