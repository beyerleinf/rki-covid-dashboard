import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { EChartOption } from 'echarts';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectTimeseries } from 'src/app/state/gae.selector';
import { GAE_LOAD_TIMESERIES_FOR_STATE } from 'src/app/state/ngrx-constants';
import { GAETimeseries, State, States } from '../../models';
import { CovidGaeService, RkiService } from '../../services';

@Component({
  selector: 'app-state-detail',
  templateUrl: './state-detail.component.html',
  styleUrls: ['./state-detail.component.scss'],
})
export class StateDetailComponent implements OnInit {
  private chartInstance: any;

  states = [
    { name: 'Baden-Württemberg', value: States.BW },
    { name: 'Bayern', value: States.BY },
    { name: 'Brandeburg', value: States.BB },
    { name: 'Berlin', value: States.BE },
    { name: 'Bremen', value: States.HB },
    { name: 'Hamburg', value: States.HH },
    { name: 'Hessen', value: States.HE },
    { name: 'Mecklenburg-Vorpommern', value: States.MV },
    { name: 'Niedersachsen', value: States.NI },
    { name: 'Nordrhein-Westfalen', value: States.NW },
    { name: 'Rheinland-Pfalz', value: States.RP },
    { name: 'Saarland', value: States.SL },
    { name: 'Sachsen-Anhalt', value: States.ST },
    { name: 'Sachsen', value: States.SN },
    { name: 'Schleswig-Holstein', value: States.SH },
    { name: 'Thüringen', value: States.TH },
  ];

  chartSeries: EChartOption.Series[] = [
    {
      name: 'value',
      type: 'line',
      encode: { x: 'timestamp', y: 'value' },
      animationDelay: (idx: number) => idx * 10,
      // markLine: {
      //   data: [
      //     {
      //       name: 'Max',
      //       yAxis: 800,
      //       label: {
      //         formatter: '{b}',
      //         position: 'insideEndTop',
      //       },
      //       lineStyle: {
      //         color: '#666',
      //       },
      //     },

      //     {
      //       name: 'Min',
      //       yAxis: 200,
      //       label: {
      //         formatter: '{b}',
      //         position: 'insideEndTop',
      //       },
      //       lineStyle: {
      //         color: '#666',
      //       },
      //     },
      //   ],
      // },
    },
  ];

  yAxisConfig: EChartOption.YAxis = {
    name: 'Cases',
    nameLocation: 'center',
    nameGap: 45,
    nameTextStyle: {
      fontWeight: 'bold',
    },
  };

  // allSensorData: Array<{ source: Array<Array<Date | number>>; dimensions: string[] }>;

  timeseries$: Observable<{ source: Array<Array<Date | number>>; dimensions: string[] }> = this.store.select(
    selectTimeseries
  );

  loading = false;
  currentStateData: (State & { lastUpdate: Date }) | null;

  constructor(private rki: RkiService, private gae: CovidGaeService, private store: Store<AppState>) {
    this.currentStateData = null;
  }

  ngOnInit(): void {}

  onChartInit(instance: any) {
    this.chartInstance = instance;
  }

  onStateChange(change: MatSelectChange) {
    this.store.dispatch({ type: GAE_LOAD_TIMESERIES_FOR_STATE, state: change.value });
    this.loading = true;
    this.rki.getStateData(change.value).subscribe(stateData => {
      if (stateData) {
        this.currentStateData = stateData;
      }

      this.loading = false;
    });
  }
}
