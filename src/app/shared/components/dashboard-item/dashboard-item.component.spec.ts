import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedMaterialModule } from 'src/app/shared-material.module';
import { DashboardItemComponent } from './dashboard-item.component';

describe('DashboardItemComponent', () => {
  let component: DashboardItemComponent;
  let fixture: ComponentFixture<DashboardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardItemComponent],
      imports: [SharedMaterialModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
