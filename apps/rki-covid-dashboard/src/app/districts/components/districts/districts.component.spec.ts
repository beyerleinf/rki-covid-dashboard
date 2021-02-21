import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DistrictsComponent } from './districts.component';

describe('DistrictsComponent', () => {
  let component: DistrictsComponent;
  let fixture: ComponentFixture<DistrictsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistrictsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DistrictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
