import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardItemModule } from '../core/modules/dashboard-item/dashboard-item.module';
import { FooterModule } from '../core/modules/footer/footer.module';
import { DistrictsComponent } from './components';
import { DistrictsRoutingModule } from './districts-routing.module';

@NgModule({
  declarations: [DistrictsComponent],
  imports: [
    CommonModule,
    DashboardItemModule,
    DistrictsRoutingModule,
    FooterModule,
    MatAutocompleteModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
  ],
})
export class DistrictsModule {}
