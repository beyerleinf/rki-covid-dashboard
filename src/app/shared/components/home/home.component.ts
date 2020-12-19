import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { RKIGeneral } from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  rkiGeneralData$: Observable<RKIGeneral> = this.store.select(state => state.rkiGeneralData);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
