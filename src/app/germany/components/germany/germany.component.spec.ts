import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { EchartsModule } from 'src/app/echarts/echarts.module';
import { RKI_API_URL } from 'src/app/rki-api-url.token';
import { GermanyComponent } from './germany.component';

describe('GermanyComponent', () => {
  let component: GermanyComponent;
  let fixture: ComponentFixture<GermanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GermanyComponent],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        HttpClientTestingModule,
        EchartsModule,
      ],
      providers: [{ provide: RKI_API_URL, useValue: 'api' }],
    }).compileComponents();

    fixture = TestBed.createComponent(GermanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
