import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { forkJoin, Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { RkiDistrictData, RkiMeta } from 'src/app/shared/models';
import { DistrictsService } from '../../services';

const LAST_DISTRICT_LOCAL_STORAGE = 'rki-covid.beyerleinf:lastDistrict';

@Component({
  selector: 'rkicovid-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.scss'],
})
export class DistrictsComponent implements OnInit {
  loading = false;

  agsInput = new FormControl();
  agsMap: Array<{ ags: string; county: string }> = [];
  filteredAgsMap: Observable<Array<{ ags: string; county: string }>>;
  districtData: RkiDistrictData;
  currentMeta: RkiMeta;

  dashboardItems = [
    { title: 'common.cases', valueKey: 'cases' },
    { title: 'common.deaths', valueKey: 'deaths' },
    { title: 'common.recovered', valueKey: 'recovered' },
    { title: 'common.weekIncidence', valueKey: 'weekIncidence' },
    { title: 'common.casesPerWeek', valueKey: 'casesPerWeek' },
    { title: 'common.casesPer100k', valueKey: 'casesPer100k' },
  ];

  displayFn = this.display.bind(this);

  constructor(private districtsService: DistrictsService) {
    this.districtData = {
      ags: '',
      cases: 0,
      casesPer100k: 0,
      casesPerWeek: 0,
      county: '',
      deaths: 0,
      deathsPerWeek: 0,
      delta: { deaths: 0, cases: 0, recovered: 0 },
      name: '',
      population: 0,
      recovered: 0,
      weekIncidence: 0,
    };
    this.currentMeta = {
      contact: '',
      info: '',
      lastCheckedForUpdate: new Date(0),
      lastUpdate: new Date(0),
      source: '',
    };

    this.filteredAgsMap = this.agsInput.valueChanges.pipe(
      startWith(''),
      map(option => (option ? this.filterDistricts(option) : this.agsMap.slice())),
      tap(() => {
        if (this.agsMap.find(e => e.ags === this.agsInput.value)) {
          this.loading = true;

          localStorage.setItem(LAST_DISTRICT_LOCAL_STORAGE, this.agsInput.value);

          this.districtsService.get(this.agsInput.value).subscribe(district => {
            this.districtData = district.data[this.agsInput.value];
            this.currentMeta = district.meta;

            this.loading = false;
          });
        }
      })
    );
  }

  ngOnInit(): void {
    this.districtsService.getAgsMap().subscribe(response => {
      this.agsMap = response;

      if (localStorage.getItem(LAST_DISTRICT_LOCAL_STORAGE)) {
        this.agsInput.setValue(localStorage.getItem(LAST_DISTRICT_LOCAL_STORAGE) as any);
      }
    });
  }

  isValidAgs() {
    return !!this.agsMap.find(e => e.ags === this.agsInput.value);
  }

  display(ags: string): string {
    return this.agsMap.find(e => e.ags === ags)?.county || '';
  }

  private filterDistricts(county: string): Array<{ ags: string; county: string }> {
    const filterValue = county.toLowerCase();

    return this.agsMap.filter(option => option.county.toLowerCase().includes(filterValue));
  }
}
