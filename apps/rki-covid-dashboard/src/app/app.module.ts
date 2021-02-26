import { LayoutModule } from '@angular/cdk/layout';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { RkiUiModule } from '@rkicovid/rki-ui';
import { RKI_API_URL } from 'libs/rki-api/src/lib/rki-api-url.token';
import { NgxEchartsModule } from 'ngx-echarts';
import { Library, TranslateObjectLoader } from 'translate-object-loader';
import { AppRoutingModule } from './app-routing.module';
import { SharedMaterialModule } from './shared-material.module';
import { AppComponent } from './shared/components';
import { sharedTranslations } from './shared/shared.translations';
import { RkiGermanyEffects, RkiGermanyHistoryEffects, RkiVaccinationsEffects } from './shared/state/effects';
import {
  rkiGermanyCaseHistoryMeanReducer,
  rkiGermanyCaseHistoryReducer,
  rkiGermanyDeathHistoryReducer,
  rkiGermanyRecoveredHistoryReducer,
  rkiGermanyReducer,
  rkiVaccinationsReducer,
} from './shared/state/reducers';

registerLocaleData(localeDe);
registerLocaleData(localeEn);

Library.add(sharedTranslations);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: TranslateObjectLoader },
      defaultLanguage: 'en',
      useDefaultLang: true,
    }),
    RkiUiModule,
    StoreModule.forRoot(
      {
        germany: rkiGermanyReducer,
        germanyCaseHistory: rkiGermanyCaseHistoryReducer,
        germanyCaseHistoryMean: rkiGermanyCaseHistoryMeanReducer,
        germanyDeathHistory: rkiGermanyDeathHistoryReducer,
        germanyRecoveredHistory: rkiGermanyRecoveredHistoryReducer,
        vaccinations: rkiVaccinationsReducer,
      },
      {}
    ),
    EffectsModule.forRoot([RkiGermanyEffects, RkiGermanyHistoryEffects, RkiVaccinationsEffects]),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    LayoutModule,
  ],
  providers: [{ provide: RKI_API_URL, useValue: 'https://api.corona-zahlen.org' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
