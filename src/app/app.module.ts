import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Library, TranslateObjectLoader } from 'translate-object-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/components';
import { coreTranslations } from './core/core.translations';
import { LanguageSwitcherModule } from './core/modules/language-switcher/language-switcher.module';
import { districtsTranslations } from './districts/districts.translations';
import { RKI_API_URL } from './rki-api-url.token';
import { vaccinationsTranslations } from './vaccinations/vaccinations.translations';

registerLocaleData(localeDe);
registerLocaleData(localeEn);

Library.add(coreTranslations);
Library.add(vaccinationsTranslations);
Library.add(districtsTranslations);

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    LanguageSwitcherModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: TranslateObjectLoader },
      defaultLanguage: 'en',
      useDefaultLang: true,
    }),
  ],
  providers: [{ provide: RKI_API_URL, useValue: 'https://api.corona-zahlen.org' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
