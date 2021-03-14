import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationsComponent } from './vaccinations.component';

describe('VaccinationsComponent', () => {
  let component: VaccinationsComponent;
  let fixture: ComponentFixture<VaccinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
