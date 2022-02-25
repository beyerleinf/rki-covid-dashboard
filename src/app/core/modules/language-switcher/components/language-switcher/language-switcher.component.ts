import { Component, OnDestroy } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'rkicovid-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent implements OnDestroy {
  currentLanguage: string;
  languages = [
    { code: 'de', name: 'common.languages.german', alias: 'GER', icon: 'assets/img/flags/de.png' },
    { code: 'en', name: 'common.languages.english', alias: 'ENG', icon: 'assets/img/flags/en.png' },
  ];

  private _destroying$ = new Subject<void>();

  constructor(private translate: TranslateService) {
    this.currentLanguage = this.translate.currentLang;

    this.translate.onLangChange.pipe(takeUntil(this._destroying$)).subscribe((event: LangChangeEvent) => {
      this.currentLanguage = event.lang;
    });
  }

  ngOnDestroy(): void {
    this._destroying$.next();
    this._destroying$.complete();
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  getCurrentLanguage() {
    return this.languages.find(language => language.code === this.currentLanguage);
  }
}
