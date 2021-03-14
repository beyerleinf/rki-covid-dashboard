import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Library, TranslateObjectLoader } from 'translate-object-loader';
import { AppRoutingModule } from './app-routing.module';
import { RKI_API_URL } from './rki-api-url.token';
import { SharedMaterialModule } from './shared-material.module';
import { AppComponent } from './shared/components';
import { sharedTranslations } from './shared/components/shared.translations';
import { SharedComponentsModule } from './shared/shared-components.module';
import { vaccinationsTranslations } from './vaccinations/vaccinations.translations';

registerLocaleData(localeDe);
registerLocaleData(localeEn);

Library.add(sharedTranslations);
Library.add(vaccinationsTranslations);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: TranslateObjectLoader },
      defaultLanguage: 'en',
      useDefaultLang: true,
    }),
    LayoutModule,
    SharedComponentsModule,
  ],
  providers: [{ provide: RKI_API_URL, useValue: 'https://api.corona-zahlen.org' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
