import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rkicovid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onMobile = true;
  pages = [
    { name: 'common.pages.germany', route: '/germany' },
    // { name: 'common.pages.states', route: '/states' },
    // { name: 'common.pages.districts', route: '/districts' },
    { name: 'common.pages.vaccinations', route: '/vaccinations' },
  ];

  constructor(
    translate: TranslateService,
    private breakpoints: BreakpointObserver
  ) {
    translate.use(translate.getBrowserLang());

    this.breakpoints
      .observe([Breakpoints.Tablet, Breakpoints.Handset])
      .subscribe(({ matches }) => {
        this.onMobile = matches;
      });
  }
}
