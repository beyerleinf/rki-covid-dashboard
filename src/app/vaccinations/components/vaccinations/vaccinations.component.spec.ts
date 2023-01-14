import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DashboardItemModule } from 'src/app/core/modules/dashboard-item/dashboard-item.module';
import { EchartsModule } from 'src/app/core/modules/echarts/echarts.module';
import { FooterModule } from 'src/app/core/modules/footer/footer.module';
import { RKI_API_URL } from 'src/app/rki-api-url.token';
import { VaccinationsComponent } from './vaccinations.component';

describe('VaccinationsComponent', () => {
  let component: VaccinationsComponent;
  let fixture: ComponentFixture<VaccinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VaccinationsComponent],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        HttpClientTestingModule,
        DashboardItemModule,
        EchartsModule,
        FooterModule,
        MatCardModule,
        MatProgressSpinnerModule,
      ],
      providers: [{ provide: RKI_API_URL, useValue: 'api' }],
    }).compileComponents();

    fixture = TestBed.createComponent(VaccinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
