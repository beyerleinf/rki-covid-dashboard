import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardItemModule, FooterModule } from '../core/modules';
import { EchartsModule } from '../echarts/echarts.module';
import { VaccinationsComponent } from './components';
import { VaccinationsRoutingModule } from './vaccinations-routing.module';

@NgModule({
  declarations: [VaccinationsComponent],
  imports: [
    CommonModule,
    DashboardItemModule,
    EchartsModule,
    FooterModule,
    MatCardModule,
    MatProgressSpinnerModule,
    TranslateModule.forChild(),
    VaccinationsRoutingModule,
  ],
})
export class VaccinationsModule {}
