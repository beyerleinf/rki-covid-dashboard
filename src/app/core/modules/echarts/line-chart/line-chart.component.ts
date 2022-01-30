import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ECharts, EChartsOption } from 'echarts';

@Component({
  selector: 'rkicovid-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnChanges {
  @Input() chartOptions: EChartsOption = {};

  private echartsInstance: ECharts | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (this.chartOptions && this.echartsInstance && changes.chartOptions) {
      this.echartsInstance.setOption(this.chartOptions, {});
    }
  }

  onChartInit(instance: ECharts) {
    this.echartsInstance = instance;
  }
}
