import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'rkicovid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sidenavOpen = true;
  pages = [
    { name: 'common.pages.germany', route: '/germany' },
    // { name: 'common.pages.states', route: '/states' },
    // { name: 'common.pages.districts', route: '/districts' },
    // { name: 'common.pages.vaccinations', route: '/vaccinations' },
  ];

  constructor(translate: TranslateService, private breakpoints: BreakpointObserver) {
    translate.use(translate.getBrowserLang());

    this.breakpoints.observe([Breakpoints.Tablet, Breakpoints.Handset]).subscribe(({ matches }) => {
      if (matches) {
        this.sidenavOpen = false;
      }
    });
  }
}
