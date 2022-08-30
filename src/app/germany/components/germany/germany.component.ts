import { Component } from '@angular/core';
import { GermanyService } from '../../services';

@Component({
  templateUrl: './germany.component.html',
  styleUrls: ['./germany.component.scss'],
  providers: [GermanyService],
})
export class GermanyComponent {
  dashboardItems = [
    { title: 'common.cases', valueKey: 'cases' },
    { title: 'common.deaths', valueKey: 'deaths' },
    { title: 'common.recovered', valueKey: 'recovered' },
    { title: 'common.weekIncidence', valueKey: 'weekIncidence' },
    { title: 'common.casesPerWeek', valueKey: 'casesPerWeek' },
    { title: 'common.casesPer100k', valueKey: 'casesPer100k' },
  ];

  constructor(public germanyService: GermanyService) {}
}
