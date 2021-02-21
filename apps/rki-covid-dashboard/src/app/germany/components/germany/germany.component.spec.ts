import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import * as echarts from 'echarts';
import { DashboardItemComponent } from 'libs/rki-ui/src/lib/dashboard-item/dashboard-item.component';
import { LineChartComponent } from 'libs/rki-ui/src/lib/line-chart/line-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedMaterialModule } from '../../../shared-material.module';
import { AppState } from '../../../shared/state/app-state';
import { GermanyComponent } from './germany.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('GermanyComponent', () => {
  let component: GermanyComponent;
  let fixture: ComponentFixture<GermanyComponent>;

  let store: MockStore;

  const initialState: AppState = {
    germany: {
      germany: {
        cases: 0,
        casesPer100k: 0,
        casesPerWeek: 0,
        deaths: 0,
        recovered: 0,
        weekIncidence: 0,
        delta: {
          cases: 0,
          deaths: 0,
          recovered: 0,
        },
        r: { value: 0, date: new Date() },
        meta: {
          contact: '',
          info: '',
          source: '',
          lastCheckedForUpdate: new Date(),
          lastUpdate: new Date(),
        },
      },
      isLoading: false,
    },
    germanyCaseHistory: {
      germanyCaseHistory: {
        data: [],
        meta: {
          contact: '',
          info: '',
          source: '',
          lastCheckedForUpdate: new Date(),
          lastUpdate: new Date(),
        },
      },
      isLoading: false,
    },
    germanyCaseHistoryMean: {
      germanyCaseHistoryMean: [],
      isLoading: false,
    },
    germanyDeathHistory: {
      germanyDeathHistory: {
        data: [],
        meta: {
          contact: '',
          info: '',
          source: '',
          lastCheckedForUpdate: new Date(),
          lastUpdate: new Date(),
        },
      },
      isLoading: false,
    },
    germanyRecoveredHistory: {
      germanyRecoveredHistory: {
        data: [],
        meta: {
          contact: '',
          info: '',
          source: '',
          lastCheckedForUpdate: new Date(),
          lastUpdate: new Date(),
        },
      },
      isLoading: false,
    },
  };

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
      ],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(GermanyComponent);
    component = fixture.componentInstance;

    store = TestBed.inject(MockStore);

    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
