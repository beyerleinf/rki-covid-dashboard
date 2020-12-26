import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { EChartOption } from 'echarts';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectTimeseries } from 'src/app/state/gae.selector';
import { GAE_LOAD_TIMESERIES_FOR_STATE, RKI_LOAD_STATE_DATA } from 'src/app/state/ngrx-constants';
import { selectRkiStateData } from 'src/app/state/rki.selectors';
import { State, States } from '../../models';

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
      markArea: {
        data: [
          [
            {
              name: 'Lockdown 1',
              xAxis: new Date(2020, 2, 15).getTime(),
              itemStyle: { opacity: 0.25 },
            },
            { xAxis: new Date(2020, 5, 15).getTime() },
          ] as any,
          [
            { name: 'Lockdown 2', xAxis: new Date(2020, 11, 16).getTime(), itemStyle: { opacity: 0.25 } },
            { xAxis: Date.now() },
          ] as any,
        ],
      },
    },
  ];

  yAxisConfig: EChartOption.YAxis = {};

  timeseries$: Observable<{ source: Array<Array<Date | number>>; dimensions: string[] }> = this.store.select(
    selectTimeseries
  );

  stateData$: Observable<State> = this.store.select(selectRkiStateData);

  loading = false;
  currentStateData: (State & { lastUpdate: Date }) | null;

  constructor(private store: Store<AppState>) {
    this.currentStateData = null;
  }

  ngOnInit(): void {}

  onChartInit(instance: any) {
    this.chartInstance = instance;
  }

  onStateChange(change: MatSelectChange) {
    this.store.dispatch({ type: GAE_LOAD_TIMESERIES_FOR_STATE, state: change.value });
    this.store.dispatch({ type: RKI_LOAD_STATE_DATA, state: change.value });
  }
}
