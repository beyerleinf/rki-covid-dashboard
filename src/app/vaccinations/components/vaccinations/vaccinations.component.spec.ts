import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { EchartsModule } from 'src/app/echarts/echarts.module';
import { RKI_API_URL } from 'src/app/rki-api-url.token';
import { SharedMaterialModule } from 'src/app/shared-material.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';
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
        SharedComponentsModule,
        HttpClientTestingModule,
        EchartsModule,
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
