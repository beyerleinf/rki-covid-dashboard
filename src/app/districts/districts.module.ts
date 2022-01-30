import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardItemModule, FooterModule } from '../core/modules';
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
    ReactiveFormsModule,
    MatInputModule,
    TranslateModule.forChild(),
  ],
})
export class DistrictsModule {}
