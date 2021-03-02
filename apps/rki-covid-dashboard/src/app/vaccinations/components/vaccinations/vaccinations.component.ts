import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RkiApiService } from '@rkicovid/rki-api';
import { RkiGermanyVaccinationData, RkiStateVaccinationData } from '@rkicovid/rki-models';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'rkicovid-vaccinations',
  templateUrl: './vaccinations.component.html',
  styleUrls: ['./vaccinations.component.scss'],
})
export class VaccinationsComponent implements OnInit {
  vaccinations: RkiGermanyVaccinationData;
  loading = false;

  dashboardItems = [
    { title: 'vaccinations.vaccinated', valueKey: 'vaccinated', difference: 'delta' },
    { title: 'vaccinations.quote', valueKey: 'quote', format: '1.1-3', unit: '%' },
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
    };
  }

  ngOnInit(): void {
    this.loading = true;
    forkJoin([this.rki.vaccinations()]).subscribe(response => {
      this.vaccinations = response[0].data;
      this.loading = false;
    });
  }
}
