import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { RKI_LOAD_GENERAL_DATA } from 'src/app/state/ngrx-constants';
import { RKIGeneral } from '../../models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  rkiGeneral$: Observable<RKIGeneral> = this.store.select(state => state.rkiGeneralData);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch({ type: RKI_LOAD_GENERAL_DATA });
  }
}
