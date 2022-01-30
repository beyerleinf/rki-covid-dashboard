import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardItemModule, EchartsModule, FooterModule } from '../core/modules';
import { GermanyComponent } from './components';
import { GermanyRoutingModule } from './germany-routing.module';

@NgModule({
  declarations: [GermanyComponent],
  imports: [
    CommonModule,
    DashboardItemModule,
    EchartsModule,
    FooterModule,
    GermanyRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    TranslateModule.forChild(),
  ],
})
export class GermanyModule {}
