import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LineChart } from 'echarts/charts';
import {
  DatasetComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { NgxEchartsModule } from 'ngx-echarts';
import { LineChartComponent } from './line-chart/line-chart.component';

const echartsComponents = [
  TitleComponent,
  TooltipComponent,
  MarkAreaComponent,
  ToolboxComponent,
  DataZoomComponent,
  LegendComponent,
  DatasetComponent,
  GridComponent,
];

const echartCharts = [LineChart];

echarts.use([...echartsComponents, ...echartCharts, CanvasRenderer]);

@NgModule({
  declarations: [LineChartComponent],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  exports: [LineChartComponent],
})
export class EchartsModule {}
