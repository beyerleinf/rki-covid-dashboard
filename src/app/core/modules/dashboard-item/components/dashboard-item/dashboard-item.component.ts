import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'rkicovid-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss'],
})
export class DashboardItemComponent implements OnInit, OnDestroy {
  @Input() cardTitle = '';
  @Input() value = 0;
  @Input() difference = 0;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  @Input() titleParams: any = {};
  @Input() isLoading = false;
  @Input() format: string | undefined = '1.0-0';
  @Input() unit: string | undefined = '';

  currentLang = '';

  private _destroying$ = new Subject<void>();

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang;
  }

  ngOnInit(): void {
    this.translate.onLangChange.pipe(takeUntil(this._destroying$)).subscribe(() => {
      this.currentLang = this.translate.currentLang;
    });
  }

  ngOnDestroy(): void {
    this._destroying$.next();
    this._destroying$.complete();
  }
}
