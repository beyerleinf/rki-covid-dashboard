import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatButtonModule,
    TranslateModule.forChild(),
    NgxEchartsModule.forChild(),
  ],
  declarations: [DashboardItemComponent, LanguageSwitcherComponent],
  exports: [DashboardItemComponent, LanguageSwitcherComponent],
})
export class RkiUiModule {}
