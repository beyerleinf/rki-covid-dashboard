import { Component, OnInit } from '@angular/core';
import { RKIGeneral } from '../../models';
import { CovidGaeService, RkiService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading = false;

  generalData: RKIGeneral | null;

  constructor(private rki: RkiService, private gae: CovidGaeService) {
    this.generalData = null;
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;

    this.rki.getGeneral().subscribe(general => {
      this.generalData = general;
      this.loading = false;
    });
  }
}
