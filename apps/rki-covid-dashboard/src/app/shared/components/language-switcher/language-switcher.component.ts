import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rkicovid-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent implements OnInit {
  languages = [
    { code: 'de', name: 'common.languages.german', icon: 'assets/img/flags/de.png' },
    { code: 'en', name: 'common.languages.english', icon: 'assets/img/flags/en.png' },
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}

  changeLanguage(languge: string) {
    this.translate.use(languge);
  }
}
