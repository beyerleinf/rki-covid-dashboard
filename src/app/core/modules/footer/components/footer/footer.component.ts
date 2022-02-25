import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { RkiMeta } from 'src/app/core/models';

@Component({
  selector: 'rkicovid-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  @Input() meta!: RkiMeta;

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
