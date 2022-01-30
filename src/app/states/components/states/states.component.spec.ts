import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { EchartsModule } from 'src/app/echarts/echarts.module';
import { RKI_API_URL } from 'src/app/rki-api-url.token';
import { StatesComponent } from './states.component';

describe('StatesComponent', () => {
  let component: StatesComponent;
  let fixture: ComponentFixture<StatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatesComponent],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        HttpClientTestingModule,
        EchartsModule,
        NoopAnimationsModule,
        FormsModule,
      ],
      providers: [{ provide: RKI_API_URL, useValue: 'api' }],
    }).compileComponents();

    fixture = TestBed.createComponent(StatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
