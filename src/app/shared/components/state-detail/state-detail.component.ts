import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { State, States } from '../../models';
import { CovidGaeService, RkiService } from '../../services';

@Component({
  selector: 'app-state-detail',
  templateUrl: './state-detail.component.html',
  styleUrls: ['./state-detail.component.scss'],
})
export class StateDetailComponent implements OnInit {
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

  loading = false;
  currentStateData: (State & { lastUpdate: Date }) | null;

  constructor(private rki: RkiService, private gae: CovidGaeService) {
    this.currentStateData = null;
  }

  ngOnInit(): void {}

  onStateChange(change: MatSelectChange) {
    console.log('state', change.value);
    this.loading = true;
    this.rki.getStateData(change.value).subscribe(stateData => {
      if (stateData) {
        this.currentStateData = stateData;
      }

      this.loading = false;
    });
  }
}
