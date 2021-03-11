import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RkiApiService } from '@rkicovid/rki-api';
import { RkiStateVaccinationData, RkiVaccinationHistory, RkiVaccinations } from '@rkicovid/rki-models';
import { EChartsOption } from 'echarts';
import { forkJoin } from 'rxjs';

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

  firstVaccinationItems = [
    { title: 'vaccinations.manufacturers.biontech', valueKey: 'biontech' },
    { title: 'vaccinations.manufacturers.moderna', valueKey: 'moderna' },
    { title: 'vaccinations.manufacturers.astraZeneca', valueKey: 'astraZeneca' },
  ];

  secondVaccinationItems = [
    { title: 'vaccinations.manufacturers.biontech', valueKey: 'biontech' },
    { title: 'vaccinations.manufacturers.moderna', valueKey: 'moderna' },
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

  constructor(private rki: RkiApiService, private translate: TranslateService) {
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
          { ...this.chartOptions.series[0], name: this.translate.instant('vaccinations.firstVaccination') },
          {
            ...this.chartOptions.series[1],
            name: this.translate.instant('vaccinations.secondVaccination'),
          },
        ],
      };
    });

    this.loading = true;

    forkJoin([this.rki.vaccinations(), this.rki.vaccinationHistory()]).subscribe(response => {
      this.vaccinations = response[0];
      this.buildHistoryChart(response[1]);
      this.loading = false;
    });
  }

  private buildHistoryChart(vaccinationHistory: RkiVaccinationHistory) {
    const source = [];

    for (let i = 0; i < vaccinationHistory.data.history.length; i++) {
      const vaccinationHistoryitem = vaccinationHistory.data.history[i];

      source.push([
        vaccinationHistoryitem.date,
        vaccinationHistoryitem.firstVaccination,
        vaccinationHistoryitem.secondVaccination,
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
