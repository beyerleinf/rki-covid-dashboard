import { Component } from '@angular/core';

@Component({
  selector: 'rkicovid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pages = [
    { name: 'common.pages.germany', route: '/germany' },
    { name: 'common.pages.states', route: '/states' },
    { name: 'common.pages.districts', route: '/districts' },
    { name: 'common.pages.vaccinations', route: '/vaccinations' },
  ];
}
