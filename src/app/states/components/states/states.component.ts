import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RkiMeta, RkiStateData, State } from 'src/app/shared/models';
import { RkiApiService } from 'src/app/shared/services';

@Component({
  selector: 'rkicovid-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss'],
})
export class StatesComponent implements OnInit {
  loading = false;
  currentLang = '';
  states = [
    { name: 'Baden-Württemberg', value: 'BW' },
    { name: 'Bayern', value: 'BY' },
    { name: 'Brandeburg', value: 'BB' },
    { name: 'Berlin', value: 'BE' },
    { name: 'Bremen', value: 'HB' },
    { name: 'Hamburg', value: 'HH' },
    { name: 'Hessen', value: 'HE' },
    { name: 'Mecklenburg-Vorpommern', value: 'MV' },
    { name: 'Niedersachsen', value: 'NI' },
    { name: 'Nordrhein-Westfalen', value: 'NW' },
    { name: 'Rheinland-Pfalz', value: 'RP' },
    { name: 'Saarland', value: 'SL' },
    { name: 'Sachsen-Anhalt', value: 'ST' },
    { name: 'Sachsen', value: 'SN' },
    { name: 'Schleswig-Holstein', value: 'SH' },
    { name: 'Thüringen', value: 'TH' },
  ];
  currentState: RkiStateData;
  currentMeta: RkiMeta;
  selectedState = '';

  dashboardItems = [
    { title: 'common.cases', valueKey: 'cases' },
    { title: 'common.deaths', valueKey: 'deaths' },
    { title: 'common.recovered', valueKey: 'recovered' },
    { title: 'common.weekIncidence', valueKey: 'weekIncidence' },
    { title: 'common.casesPerWeek', valueKey: 'casesPerWeek' },
    { title: 'common.casesPer100k', valueKey: 'casesPer100k' },
  ];

  constructor(private rki: RkiApiService, private translate: TranslateService) {
    this.currentState = {
      abbreviation: 'BB',
      cases: 0,
      casesPer100k: 0,
      casesPerWeek: 0,
      deaths: 0,
      deathsPerWeek: 0,
      delta: {
        cases: 0,
        deaths: 0,
        recovered: 0,
      },
      id: 0,
      name: '',
      population: 0,
      recovered: 0,
      weekIncidence: 0,
    };
    this.currentMeta = {
      contact: '',
      info: '',
      lastCheckedForUpdate: new Date(0),
      lastUpdate: new Date(0),
      source: '',
    };
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
      this.currentLang = this.translate.currentLang;
    });
  }

  onChangeState(event: State) {
    this.selectedState = event;

    this.loading = true;
    this.rki.state(event).subscribe(state => {
      this.currentState = state.data[event];
      this.currentMeta = state.meta;

      this.loading = false;
    });
  }
}
