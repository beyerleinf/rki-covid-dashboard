import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { RKI_API_URL } from '@rkicovid/rki-api';
import { LineChartComponent, RkiEchartsModule } from '@rkicovid/rki-echarts';
import { DashboardItemComponent, RkiUiModule } from '@rkicovid/rki-ui';
import * as echarts from 'echarts';
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
        RkiEchartsModule,
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
