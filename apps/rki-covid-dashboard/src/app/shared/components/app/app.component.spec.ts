import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from 'libs/rki-ui/src/lib/language-switcher/language-switcher.component';
import { SharedMaterialModule } from '../../../shared-material.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, LanguageSwitcherComponent],
      imports: [
        RouterTestingModule,
        SharedMaterialModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
