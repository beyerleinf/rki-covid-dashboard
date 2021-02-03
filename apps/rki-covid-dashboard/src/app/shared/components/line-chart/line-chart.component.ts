import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { EChartOption, ECharts } from 'echarts';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit, OnChanges {
  private echartInstance: ECharts | null = null;

  @Input() dataset: EChartOption.Dataset | null = null;
  @Input() series: EChartOption.Series[] | null = null;
  @Input() yAxisConfig: EChartOption.YAxis | null = null;

  chartOptions: EChartOption | null = null;

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      xAxis: {
        type: 'time',
        minInterval: 60 * 1000,
      },
      yAxis: {
        type: 'value',
        ...this.yAxisConfig,
      },
      dataset: this.dataset || {},
      series: this.series || [],
      color: ['#c2185b'],
      animation: true,
      tooltip: {
        trigger: 'axis',
        formatter: params => {
          if (Array.isArray(params)) {
            return `${dayjs(params[0].data[0]).format('DD/MM/YYYY HH:mm')}: ${params[0].data[1]}`;
          } else {
            return 'FIXME';
          }
        },
      },
      dataZoom: [
        {
          type: 'inside',
        },
      ],
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chartOptions && this.echartInstance && changes.dataset) {
      this.echartInstance.setOption({ dataset: this.dataset || {} });
    }
  }

  onChartInit(instance: ECharts) {
    this.echartInstance = instance;
  }
}
