import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DashboardItemModule, FooterModule } from '../core/modules';
import { StatesComponent } from './components';
import { StatesRoutingModule } from './states-routing.module';

@NgModule({
  declarations: [StatesComponent],
  imports: [
    CommonModule,
    DashboardItemModule,
    FooterModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    StatesRoutingModule,
  ],
})
export class StatesModule {}
