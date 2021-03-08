import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { EChartsOption, ECharts } from 'echarts';

@Component({
  selector: 'rkicovid-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  private echartInstance: ECharts;

  @Input() chartOptions: EChartsOption = {};

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.chartOptions && this.echartInstance && changes.chartOptions) {
      this.echartInstance.setOption(this.chartOptions, {});
    }
  }

  onChartInit(instance: ECharts) {
    this.echartInstance = instance;
  }
}
