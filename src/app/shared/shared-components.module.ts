import { NgModule } from '@angular/core';
import { SharedMaterialModule } from 'src/app/shared-material.module';
import { DashboardItemComponent } from './components/dashboard-item/dashboard-item.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DashboardItemComponent, LanguageSwitcherComponent],
  imports: [CommonModule, SharedMaterialModule, TranslateModule.forChild()],
  exports: [DashboardItemComponent, LanguageSwitcherComponent],
})
export class SharedComponentsModule {}
