import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, map, startWith, tap } from 'rxjs';
import { RkiMeta } from 'src/app/core/models';
import { LAST_DISTRICT_LOCAL_STORAGE } from '../constants';
import { RkiDistrictData } from '../models';
import { DistrictsEndpointService } from './districts-endpoint/districts-endpoint.service';

interface DistrictData extends RkiDistrictData {
  meta: RkiMeta;
}

interface AgsMapItem {
  ags: string;
  county: string;
}

@UntilDestroy()
@Injectable()
export class DistrictsService {
  searchControl = new FormControl();

  filteredDistricts$ = this.searchControl.valueChanges.pipe(
    untilDestroyed(this),
    startWith(''),
    map(text => (text ? this.filterDistricts(text) : [...this.agsMap])),
    tap(() => {
      console.log(this.searchControl.value);

      if (this.agsMap.find(e => e.ags === this.searchControl.value)) {
        this.getDistrict(this.searchControl.value);
      }
    })
  );

  displayDistrictFn = this.displayDistrict.bind(this);

  private currentDistrictSubject = new BehaviorSubject<DistrictData | null>(null);
  private selectedDistrictSubject = new BehaviorSubject<string | null>(null);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  private agsMap: AgsMapItem[] = [];

  constructor(private endpointService: DistrictsEndpointService) {
    this.loadAgsMap();
  }

  get currentDistrict$() {
    return this.currentDistrictSubject.asObservable();
  }

  get selectedDistrict$() {
    return this.selectedDistrictSubject.asObservable();
  }

  get loading$() {
    return this.loadingSubject.asObservable();
  }

  private getDistrict(ags: string) {
    this.loadingSubject.next(true);

    this.endpointService.get(ags).subscribe(({ data, meta }) => {
      this.currentDistrictSubject.next({ ...data[ags], meta });
      this.selectedDistrictSubject.next(ags);

      this.saveDistrict(ags);

      this.loadingSubject.next(false);
    });
  }

  private loadSavedDistrict() {
    const savedDistrict = localStorage.getItem(LAST_DISTRICT_LOCAL_STORAGE);

    if (savedDistrict) {
      this.getDistrict(savedDistrict);
      this.searchControl.setValue(savedDistrict);
    }
  }

  private saveDistrict(district: string) {
    localStorage.setItem(LAST_DISTRICT_LOCAL_STORAGE, district);
  }

  private loadAgsMap() {
    this.endpointService.getAgsMap().subscribe(agsMap => {
      this.agsMap = agsMap;

      this.loadSavedDistrict();
    });
  }

  private displayDistrict(ags: string) {
    return this.agsMap.find(e => e.ags === ags)?.county || '';
  }

  private filterDistricts(filterValue: string) {
    return this.agsMap.filter(option => option.county.toLowerCase().includes(filterValue.toLowerCase()));
  }
}
