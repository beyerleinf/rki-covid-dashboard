import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { Library, TranslateObjectLoader } from 'translate-object-loader';
import { AppRoutingModule } from './app-routing.module';
import { SharedMaterialModule } from './shared-material.module';
import { AppComponent, HomeComponent, LineChartComponent, StateDetailComponent } from './shared/components';
import { GaeEffects } from './state/gae.effects';
import { timeseriesReducer } from './state/gae.reducer';
import { RkiEffects } from './state/rki.effects';
import { rkiGeneralDataReducer } from './state/rki.reducer';

Library.add();

@NgModule({
  declarations: [AppComponent, HomeComponent, StateDetailComponent, LineChartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedMaterialModule,
    StoreModule.forRoot({ rkiGeneralData: rkiGeneralDataReducer, timeseries: timeseriesReducer }),
    EffectsModule.forRoot([RkiEffects, GaeEffects]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateObjectLoader,
      },
    }),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
