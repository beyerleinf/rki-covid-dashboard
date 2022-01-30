import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DashboardItemModule } from 'src/app/core/modules/dashboard-item/dashboard-item.module';
import { EchartsModule } from 'src/app/core/modules/echarts/echarts.module';
import { FooterModule } from 'src/app/core/modules/footer/footer.module';
import { RKI_API_URL } from 'src/app/rki-api-url.token';
import { GermanyRoutingModule } from '../../germany-routing.module';
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
        DashboardItemModule,
        EchartsModule,
        FooterModule,
        GermanyRoutingModule,
        MatCardModule,
        MatProgressSpinnerModule,
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
