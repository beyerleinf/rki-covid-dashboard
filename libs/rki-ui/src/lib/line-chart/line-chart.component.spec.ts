import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxEchartsModule } from 'ngx-echarts';
import { LineChartComponent } from './line-chart.component';
import * as echarts from 'echarts';

describe('LineChartComponent', () => {
  let component: LineChartComponent;
  let fixture: ComponentFixture<LineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LineChartComponent],
      imports: [NgxEchartsModule.forRoot({ echarts })],
    }).compileComponents();

    fixture = TestBed.createComponent(LineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
