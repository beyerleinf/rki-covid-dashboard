import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardItemModule } from '../core/modules/dashboard-item/dashboard-item.module';
import { EchartsModule } from '../core/modules/echarts/echarts.module';
import { FooterModule } from '../core/modules/footer/footer.module';
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
