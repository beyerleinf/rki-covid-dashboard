import { Component } from '@angular/core';
import { StatesService } from '../../services';

@Component({
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss'],
  providers: [StatesService],
})
export class StatesComponent {
  states = [
    { name: 'Baden-Württemberg', value: 'BW' },
    { name: 'Bayern', value: 'BY' },
    { name: 'Brandenburg', value: 'BB' },
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

  dashboardItems = [
    { title: 'common.cases', valueKey: 'cases' },
    { title: 'common.deaths', valueKey: 'deaths' },
    { title: 'common.recovered', valueKey: 'recovered' },
    { title: 'common.weekIncidence', valueKey: 'weekIncidence' },
    { title: 'common.casesPerWeek', valueKey: 'casesPerWeek' },
    { title: 'common.casesPer100k', valueKey: 'casesPer100k' },
  ];

  constructor(public statesService: StatesService) {}
}
