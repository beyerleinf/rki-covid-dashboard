import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Library, TranslateObjectLoader } from 'translate-object-loader';
import { AppRoutingModule } from './app-routing.module';
import { SharedMaterialModule } from './shared-material.module';
import { AppComponent, LanguageSwitcherComponent } from './shared/components';
import { sharedTranslations } from './shared/shared.translations';

Library.add(sharedTranslations);

@NgModule({
  declarations: [AppComponent, LanguageSwitcherComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: TranslateObjectLoader },
      defaultLanguage: 'de',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
