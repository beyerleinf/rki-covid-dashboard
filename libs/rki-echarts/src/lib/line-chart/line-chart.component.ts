import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ECharts, EChartsOption } from 'echarts';

@Component({
  selector: 'rkicovid-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnChanges {
  private echartInstance: ECharts;

  @Input() chartOptions: EChartsOption = {};

  ngOnChanges(changes: SimpleChanges) {
    if (this.chartOptions && this.echartInstance && changes.chartOptions) {
      this.echartInstance.setOption(this.chartOptions, {});
    }
  }

  onChartInit(instance: ECharts) {
    this.echartInstance = instance;
  }
}
