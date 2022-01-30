import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DashboardItemModule, FooterModule } from 'src/app/core/modules';
import { RKI_API_URL } from 'src/app/rki-api-url.token';
import { DistrictsRoutingModule } from '../../districts-routing.module';
import { DistrictsComponent } from './districts.component';

describe('DistrictsComponent', () => {
  let component: DistrictsComponent;
  let fixture: ComponentFixture<DistrictsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistrictsComponent],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({ loader: { provide: TranslateLoader, useClass: TranslateFakeLoader } }),
        NoopAnimationsModule,
        DashboardItemModule,
        DistrictsRoutingModule,
        FooterModule,
        MatAutocompleteModule,
        MatCardModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
      ],
      providers: [{ provide: RKI_API_URL, useValue: 'api' }],
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
