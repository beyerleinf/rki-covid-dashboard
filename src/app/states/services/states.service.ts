import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RkiMeta } from 'src/app/core/models';
import { LAST_STATE_LOCAL_STORAGE } from '../constants';
import { RkiStateData, RkiStatesData } from '../models';
import { StatesEndpointService } from './states-endpoint/states-endpoint.service';

interface StateData extends RkiStateData {
  meta: RkiMeta;
}

@Injectable()
export class StatesService {
  private currentStateSubject = new BehaviorSubject<StateData | null>(null);
  private selectedStateSubject = new BehaviorSubject<keyof RkiStatesData | null>(null);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  constructor(private endpointService: StatesEndpointService) {
    this.loadSavedState();
  }

  get currentState$() {
    return this.currentStateSubject.asObservable();
  }

  get selectedState$() {
    return this.selectedStateSubject.asObservable();
  }

  get loading$() {
    return this.loadingSubject.asObservable();
  }

  public selectState(state: keyof RkiStatesData) {
    this.loadingSubject.next(true);

    this.endpointService.get(state).subscribe(states => {
      this.currentStateSubject.next({ ...states.data[state], meta: states.meta });
      this.selectedStateSubject.next(state);

      this.saveState(state);

      this.loadingSubject.next(false);
    });
  }

  private loadSavedState() {
    const savedState = localStorage.getItem(LAST_STATE_LOCAL_STORAGE);

    if (savedState) {
      this.selectState(savedState as keyof RkiStatesData);
    }
  }

  private saveState(state: keyof RkiStatesData) {
    localStorage.setItem(LAST_STATE_LOCAL_STORAGE, state);
  }
}
