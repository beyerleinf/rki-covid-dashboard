import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { RKI_API_URL } from '@rkicovid/rki-api';
import { RkiEchartsModule } from '@rkicovid/rki-echarts';
import { RkiUiModule } from '@rkicovid/rki-ui';
import { SharedMaterialModule } from '../../../shared-material.module';
import { VaccinationsComponent } from './vaccinations.component';

describe('VaccinationsComponent', () => {
  let component: VaccinationsComponent;
  let fixture: ComponentFixture<VaccinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VaccinationsComponent],
      imports: [
        SharedMaterialModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        MatChipsModule,
        HttpClientTestingModule,
        RkiUiModule,
        RkiEchartsModule,
      ],
      providers: [{ provide: RKI_API_URL, useValue: 'api' }],
    }).compileComponents();

    fixture = TestBed.createComponent(VaccinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
