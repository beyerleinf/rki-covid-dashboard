import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rkicovid-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent {
  currentLanguage: string;
  languages = [
    { code: 'de', name: 'common.languages.german', alias: 'GER', icon: 'assets/img/flags/de.png' },
    { code: 'en', name: 'common.languages.english', alias: 'ENG', icon: 'assets/img/flags/en.png' },
  ];

  constructor(private translate: TranslateService) {
    this.currentLanguage = this.translate.defaultLang;

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLanguage = event.lang;
    });
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  getCurrentLanguage() {
    return this.languages.find(language => language.code === this.currentLanguage);
  }
}
