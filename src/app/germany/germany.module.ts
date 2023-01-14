import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardItemModule } from '../core/modules/dashboard-item/dashboard-item.module';
import { EchartsModule } from '../core/modules/echarts/echarts.module';
import { FooterModule } from '../core/modules/footer/footer.module';
import { GermanyComponent } from './components';

@NgModule({
  declarations: [GermanyComponent],
  imports: [
    CommonModule,
    DashboardItemModule,
    EchartsModule,
    FooterModule,
    RouterModule.forChild([{ path: '', component: GermanyComponent }]),
    MatCardModule,
    MatProgressSpinnerModule,
    TranslateModule.forChild(),
  ],
})
export class GermanyModule {}
