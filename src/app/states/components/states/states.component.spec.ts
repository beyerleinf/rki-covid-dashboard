import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DashboardItemModule } from 'src/app/core/modules/dashboard-item/dashboard-item.module';
import { FooterModule } from 'src/app/core/modules/footer/footer.module';
import { RKI_API_URL } from 'src/app/rki-api-url.token';
import { StatesComponent } from './states.component';

describe('StatesComponent', () => {
  let component: StatesComponent;
  let fixture: ComponentFixture<StatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatesComponent],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        HttpClientTestingModule,
        NoopAnimationsModule,
        FormsModule,
        DashboardItemModule,
        FooterModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
      ],
      providers: [{ provide: RKI_API_URL, useValue: 'api' }],
    }).compileComponents();

    fixture = TestBed.createComponent(StatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
