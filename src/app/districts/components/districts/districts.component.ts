import { Component } from '@angular/core';
import { DistrictsService } from '../../services';

@Component({
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.scss'],
  providers: [DistrictsService],
})
export class DistrictsComponent {
  dashboardItems = [
    { title: 'common.cases', valueKey: 'cases' },
    { title: 'common.deaths', valueKey: 'deaths' },
    { title: 'common.recovered', valueKey: 'recovered' },
    { title: 'common.weekIncidence', valueKey: 'weekIncidence' },
    { title: 'common.casesPerWeek', valueKey: 'casesPerWeek' },
    { title: 'common.casesPer100k', valueKey: 'casesPer100k' },
  ];

  constructor(public districtsService: DistrictsService) {}
}
