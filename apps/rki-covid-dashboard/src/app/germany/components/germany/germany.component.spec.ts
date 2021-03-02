import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { RkiUiModule } from '@rkicovid/rki-ui';
import * as echarts from 'echarts';
import { RKI_API_URL } from 'libs/rki-api/src/lib/rki-api-url.token';
import { DashboardItemComponent } from 'libs/rki-ui/src/lib/dashboard-item/dashboard-item.component';
import { LineChartComponent } from 'libs/rki-ui/src/lib/line-chart/line-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedMaterialModule } from '../../../shared-material.module';
import { GermanyComponent } from './germany.component';

describe('GermanyComponent', () => {
  let component: GermanyComponent;
  let fixture: ComponentFixture<GermanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GermanyComponent, DashboardItemComponent, LineChartComponent],
      imports: [
        SharedMaterialModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        MatChipsModule,
        NgxEchartsModule.forRoot({ echarts }),
        HttpClientTestingModule,
        RkiUiModule,
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
