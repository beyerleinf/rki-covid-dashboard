import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { EChartOption } from 'echarts';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectTimeseries } from 'src/app/state/gae.selector';
import { GAE_LOAD_TIMESERIES_FOR_STATE, RKI_LOAD_STATE_DATA } from 'src/app/state/ngrx-constants';
import { selectRkiGeneralData, selectRkiStateData } from 'src/app/state/rki.selectors';
import { RKIGeneral, State, States } from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  states = [
    { name: 'Baden-Württemberg', value: States.BW },
    { name: 'Bayern', value: States.BY },
    { name: 'Brandenburg', value: States.BB },
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

  generalDashboardItems = [
    { title: 'common.cases', valueKey: 'cases' },
    { title: 'common.weekIncidence', valueKey: 'weekIncidence' },
    { title: 'common.casesPerWeek', valueKey: 'casesPerWeek' },
    { title: 'common.casesPer100k', valueKey: 'casesPer100k' },
    { title: 'common.recovered', valueKey: 'recovered' },
    { title: 'common.deaths', valueKey: 'deaths' },
  ];

  stateDashboardItems = [
    { title: 'common.casesState', valueKey: 'count' },
    { title: 'common.weekIncidenceState', valueKey: 'weekIncidence' },
    { title: 'common.casesPer100kState', valueKey: 'casesPer100k' },
    { title: 'common.deathsState', valueKey: 'deaths' },
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

  rkiGeneralData$: Observable<RKIGeneral> = this.store.select(selectRkiGeneralData);
  stateData$: Observable<State> = this.store.select(selectRkiStateData);
  timeseries$: Observable<{ source: Array<Array<Date | number>>; dimensions: string[] }> = this.store.select(
    selectTimeseries
  );

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  onStateChange(change: MatSelectChange) {
    this.store.dispatch({ type: GAE_LOAD_TIMESERIES_FOR_STATE, state: change.value });
    this.store.dispatch({ type: RKI_LOAD_STATE_DATA, state: change.value });
  }

  getProperty(obj: any, property: string) {
    return obj[property];
  }
}
