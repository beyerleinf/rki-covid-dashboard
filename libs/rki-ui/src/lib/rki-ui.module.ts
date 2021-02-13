import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [DashboardItemComponent],
  exports: [DashboardItemComponent],
})
export class RkiUiModule {}
