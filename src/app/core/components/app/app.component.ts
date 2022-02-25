import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'rkicovid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  onMobile = true;
  pages = [
    { name: 'common.pages.germany', route: '/germany' },
    { name: 'common.pages.states', route: '/states' },
    { name: 'common.pages.districts', route: '/districts' },
    { name: 'common.pages.vaccinations', route: '/vaccinations' },
  ];

  private _destroying$ = new Subject<void>();

  constructor(translate: TranslateService, private breakpoints: BreakpointObserver) {
    translate.use(translate.getBrowserLang() || 'en');
  }

  ngOnInit(): void {
    this.breakpoints
      .observe([Breakpoints.Tablet, Breakpoints.Handset])
      .pipe(takeUntil(this._destroying$))
      .subscribe(({ matches }) => {
        this.onMobile = matches;
      });
  }

  ngOnDestroy(): void {
    this._destroying$.next();
    this._destroying$.complete();
  }
}
