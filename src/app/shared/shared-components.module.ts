import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedMaterialModule } from 'src/app/shared-material.module';
import { DashboardItemComponent, FooterComponent, LanguageSwitcherComponent } from './components';

@NgModule({
  declarations: [DashboardItemComponent, LanguageSwitcherComponent, FooterComponent],
  imports: [CommonModule, SharedMaterialModule, TranslateModule.forChild()],
  exports: [DashboardItemComponent, LanguageSwitcherComponent, FooterComponent],
})
export class SharedComponentsModule {}
