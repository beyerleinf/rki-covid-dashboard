import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../state/app.state';
import {
  GAE_LOAD_TIMESERIES_FOR_STATE,
  RKI_LOAD_GENERAL_DATA,
  RKI_LOAD_STATE_DATA,
} from '../../../state/ngrx-constants';
import { selectRkiGeneralData } from '../../../state/rki.selectors';
import { RKIGeneral, States } from '../../models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  rkiGeneral$: Observable<RKIGeneral> = this.store.select(selectRkiGeneralData);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch({ type: RKI_LOAD_GENERAL_DATA });
    this.store.dispatch({ type: GAE_LOAD_TIMESERIES_FOR_STATE, state: States.BW });
    this.store.dispatch({ type: RKI_LOAD_STATE_DATA, state: States.BW });
  }
}
